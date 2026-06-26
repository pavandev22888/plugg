import { app, BrowserWindow, ipcMain, dialog } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { installer } from './installer';
import { detector } from './detector';
import { github } from './github';
import { updater } from './updater';
import { marketplace } from './marketplace';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1400,
        height: 900,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
        },
    });
    if (process.env.VITE_DEV_SERVER_URL) {
        mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL);
    }
    else {
        mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
    }
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
    // Setup updater
    updater.configure(mainWindow);
}
app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
// IPC handlers - Core
ipcMain.handle('get-daw-paths', () => detector.getDAWPaths());
ipcMain.handle('get-plugins', () => github.getPlugins());
ipcMain.handle('install-plugin', async (event, pluginId, dawName) => {
    return installer.installPlugin(pluginId, dawName);
});
ipcMain.handle('uninstall-plugin', async (event, pluginId, dawName) => {
    return installer.uninstallPlugin(pluginId, dawName);
});
ipcMain.handle('get-installed', () => installer.getInstalledPlugins());
// IPC handlers - Updater
ipcMain.handle('check-updates', () => updater.checkForUpdates());
ipcMain.handle('download-update', () => updater.downloadUpdate());
ipcMain.handle('install-update', () => updater.installUpdate());
// IPC handlers - Marketplace
ipcMain.handle('get-marketplace-plugins', () => marketplace.getPlugins());
ipcMain.handle('upload-plugin', async (event, pluginData) => {
    const { name, description, category, author, tags, filePath } = pluginData;
    return marketplace.uploadPlugin(name, description, category, author, tags, filePath);
});
ipcMain.handle('download-marketplace-plugin', async (event, pluginId) => {
    const result = await dialog.showSaveDialog(mainWindow, {
        defaultPath: `plugin-${pluginId}.vst3`,
        filters: [{ name: 'VST3 Plugin', extensions: ['vst3'] }],
    });
    if (!result.canceled) {
        return marketplace.downloadPlugin(pluginId, result.filePath);
    }
    return false;
});
ipcMain.handle('rate-plugin', async (event, pluginId, rating) => {
    return marketplace.ratePlugin(pluginId, rating);
});
ipcMain.handle('delete-plugin', async (event, pluginId) => {
    return marketplace.deletePlugin(pluginId);
});
ipcMain.handle('select-vst3-file', async () => {
    const result = await dialog.showOpenDialog(mainWindow, {
        properties: ['openFile'],
        filters: [
            { name: 'VST3 Plugin', extensions: ['vst3'] },
            { name: 'Compressed VST3', extensions: ['zip'] },
        ],
    });
    return result.filePaths[0] || null;
});
