import { autoUpdater } from 'electron-updater';
class Updater {
    constructor() {
        Object.defineProperty(this, "mainWindow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
    }
    configure(mainWindow) {
        this.mainWindow = mainWindow;
        autoUpdater.checkForUpdatesAndNotify();
        autoUpdater.on('update-available', (info) => {
            this.mainWindow?.webContents.send('update-available', {
                version: info.version,
                releaseNotes: info.releaseNotes,
            });
        });
        autoUpdater.on('update-downloaded', () => {
            this.mainWindow?.webContents.send('update-downloaded');
        });
        autoUpdater.on('error', (error) => {
            console.error('Update error:', error);
            this.mainWindow?.webContents.send('update-error', error.message);
        });
    }
    downloadUpdate() {
        autoUpdater.downloadUpdate();
    }
    installUpdate() {
        autoUpdater.quitAndInstall();
    }
    checkForUpdates() {
        return autoUpdater.checkForUpdates();
    }
}
export const updater = new Updater();
