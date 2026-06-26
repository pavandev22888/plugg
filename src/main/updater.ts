import { autoUpdater } from 'electron-updater'
import { BrowserWindow } from 'electron'

class Updater {
  private mainWindow: BrowserWindow | null = null

  configure(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow

    autoUpdater.checkForUpdatesAndNotify()

    autoUpdater.on('update-available', (info: any) => {
      this.mainWindow?.webContents.send('update-available', {
        version: info.version,
        releaseNotes: info.releaseNotes,
      })
    })

    autoUpdater.on('update-downloaded', () => {
      this.mainWindow?.webContents.send('update-downloaded')
    })

    autoUpdater.on('error', (error: any) => {
      console.error('Update error:', error)
      this.mainWindow?.webContents.send('update-error', error.message)
    })
  }

  downloadUpdate() {
    autoUpdater.downloadUpdate()
  }

  installUpdate() {
    autoUpdater.quitAndInstall()
  }

  checkForUpdates() {
    return autoUpdater.checkForUpdates()
  }
}

export const updater = new Updater()
