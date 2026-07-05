"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld('electronAPI', {
    platform: process.platform,
    runCommand: (payload) => electron_1.ipcRenderer.invoke('run-command', payload)
    // openExcel: (buffer: ArrayBuffer) => ipcRenderer.invoke('open-excel', buffer),
    // saveExcel: (buffer: ArrayBuffer) => ipcRenderer.invoke('save-excel', buffer),
});
//# sourceMappingURL=preload.js.map