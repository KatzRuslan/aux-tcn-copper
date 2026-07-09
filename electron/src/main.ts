import { app, BrowserWindow, Menu, ipcMain, shell, dialog } from 'electron';
import * as path from 'node:path';
import * as os from 'node:os';
import * as fs from 'node:fs';
import * as crypto from 'node:crypto';
import { spawn } from 'node:child_process';

let mainWindow: BrowserWindow | null;
const isDev = process.env['NODE_ENV'] === 'development';

if (isDev) {
    // webSecurity намеренно отключён только в dev — глушим соответствующее предупреждение Electron
    process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
}
function createWindow(): void {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
            webSecurity: !isDev,
        },
    });

    if (isDev) {
        mainWindow.loadURL('http://localhost:4208');
        mainWindow.webContents.openDevTools();
    } else {
        mainWindow.loadFile(path.join(__dirname, 'angular/browser/index.html'));
    }

    const menuTemplate: Electron.MenuItemConstructorOptions[] = [
        {
            label: 'Application',
            submenu: [
                {
                    label: 'Reload',
                    accelerator: 'Ctrl+R',
                    click: () => isDev ? mainWindow!.reload() : mainWindow!.loadFile(path.join(__dirname, 'angular/browser/index.html')),
                },
                {
                    label: 'Open DevTools',
                    accelerator: 'F12',
                    click: () => mainWindow!.webContents.openDevTools(),
                },
                {
                    label: 'Close DevTools',
                    // accelerator: 'F12',
                    click: () => mainWindow!.webContents.closeDevTools(),
                },
                { type: 'separator' },
                { role: 'quit' },
            ],
        }
    ];

    Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));
}
function getPublicDir(): string {
    if (isDev) {
        return path.join(__dirname, '../../public');
    }
    const portableDir = process.env['PORTABLE_EXECUTABLE_DIR'];
    const nextToExe = portableDir ? path.join(portableDir, 'public') : null;
    if (nextToExe && fs.existsSync(nextToExe)) {
        return nextToExe;
    }
    return path.join(process.resourcesPath, 'public');
}
function readData({ target }: { target: string }) {
    const filePath = path.join(getPublicDir(), `${target}.json`);
    try {
        if (!fs.existsSync(filePath)) {
            return { success: true, data: null };
        }
        const content = fs.readFileSync(filePath, 'utf-8');
        return { success: true, data: JSON.parse(content) };
    } catch (err: any) {
        return { success: false, error: { message: err?.message ?? `Read data failed (${filePath})` } };
    }
}
function writeData({ target, data, reload }: { target: string; data: any; reload?: boolean }) {
    const filePath = path.join(getPublicDir(), `${target}.json`);
    try {
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
        return { success: true, filePath, reload: reload === true };
    } catch (err: any) {
        return { success: false, error: {  message: err?.message ?? `Save data failed (${filePath})` }, reload: false };
    }
}
ipcMain.handle('run-command', async (event, payload: { command: string; args?: any }) => {
    const { command, args } = payload;
    // console.log(args)
    let result: any;
    switch (command) {
        // case 'save-data':
        //     result = saveData(args);
        //     break;
        case 'read-data':
            result = readData(args);
            break;
        case 'write-data':
            result = writeData(args);
            break;
        // case 'component-schemes':
        //     result = getComponentSchemes(args);
        //     break;
        // case 'component-drawer':
        //     result = getDrawer(args);
        //     break;
        // case 'fontello-list':
        //     result = getFontelloIconList();
        //     break;
        // case 'update-fontello':
        //     result = updateFontelloResource();
        //     break;
        // // case 'preset':
        // //     result = generatePreset(args);
        // //     break;
        default:
            result = { success: false, error: { message: `Unknown command: ${command}` } };
    }
    if (result?.reload) {
        return new Promise((resolve, reject) => {
            spawn(command, { shell: true, stdio: 'inherit' })
                .on('close', () => {
                    if (mainWindow) mainWindow.reload();
                    resolve(result);
                })
                .on('error', reject);
        });
    } else {
        return result;
    }
});

app.whenReady().then(async () => {
    if (isDev) {
        const { default: installExtension, REDUX_DEVTOOLS } = await import('electron-devtools-installer');
        await installExtension(REDUX_DEVTOOLS).catch(console.error);
    }
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});