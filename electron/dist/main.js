"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path = __importStar(require("node:path"));
const fs = __importStar(require("node:fs"));
const node_child_process_1 = require("node:child_process");
let mainWindow;
const isDev = process.env['NODE_ENV'] === 'development';
if (isDev) {
    // webSecurity намеренно отключён только в dev — глушим соответствующее предупреждение Electron
    process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
}
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
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
    }
    else {
        mainWindow.loadFile(path.join(__dirname, 'angular/browser/index.html'));
    }
    const menuTemplate = [
        {
            label: 'Application',
            submenu: [
                {
                    label: 'Reload',
                    accelerator: 'Ctrl+R',
                    click: () => isDev ? mainWindow.reload() : mainWindow.loadFile(path.join(__dirname, 'angular/browser/index.html')),
                },
                {
                    label: 'Open DevTools',
                    accelerator: 'F12',
                    click: () => mainWindow.webContents.openDevTools(),
                },
                {
                    label: 'Close DevTools',
                    // accelerator: 'F12',
                    click: () => mainWindow.webContents.closeDevTools(),
                },
                { type: 'separator' },
                { role: 'quit' },
            ],
        }
    ];
    electron_1.Menu.setApplicationMenu(electron_1.Menu.buildFromTemplate(menuTemplate));
}
function getPublicDir() {
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
function readData({ target }) {
    const filePath = path.join(getPublicDir(), `${target}.json`);
    try {
        if (!fs.existsSync(filePath)) {
            return { success: true, data: null };
        }
        const content = fs.readFileSync(filePath, 'utf-8');
        return { success: true, data: JSON.parse(content) };
    }
    catch (err) {
        return { success: false, error: { message: err?.message ?? `Read data failed (${filePath})` } };
    }
}
function writeData({ target, data, reload }) {
    const filePath = path.join(getPublicDir(), `${target}.json`);
    try {
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
        return { success: true, filePath, reload: reload === true };
    }
    catch (err) {
        return { success: false, error: { message: err?.message ?? `Save data failed (${filePath})` }, reload: false };
    }
}
electron_1.ipcMain.handle('run-command', async (event, payload) => {
    const { command, args } = payload;
    // console.log(args)
    let result;
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
            (0, node_child_process_1.spawn)(command, { shell: true, stdio: 'inherit' })
                .on('close', () => {
                if (mainWindow)
                    mainWindow.reload();
                resolve(result);
            })
                .on('error', reject);
        });
    }
    else {
        return result;
    }
});
electron_1.app.whenReady().then(async () => {
    if (isDev) {
        const { default: installExtension, REDUX_DEVTOOLS } = await Promise.resolve().then(() => __importStar(require('electron-devtools-installer')));
        await installExtension(REDUX_DEVTOOLS).catch(console.error);
    }
    createWindow();
    electron_1.app.on('activate', () => {
        if (electron_1.BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
//# sourceMappingURL=main.js.map