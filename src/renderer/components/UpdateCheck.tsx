import { useEffect, useState } from 'react'

export default function UpdateCheck() {
  const [updateAvailable, setUpdateAvailable] = useState(false)
  const [updateDownloaded, setUpdateDownloaded] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)

  useEffect(() => {
    const ipcRenderer = (window as any).ipcRenderer

    // Listen for update available
    ipcRenderer.on('update-available', (data: any) => {
      setUpdateAvailable(true)
      console.log('Update available:', data)
    })

    // Listen for update downloaded
    ipcRenderer.on('update-downloaded', () => {
      setUpdateDownloaded(true)
      setIsDownloading(false)
    })

    // Listen for update error
    ipcRenderer.on('update-error', (error: string) => {
      console.error('Update error:', error)
      setIsDownloading(false)
    })

    // Check for updates on mount
    ipcRenderer.invoke('check-updates')

    return () => {
      // Cleanup listeners
    }
  }, [])

  const handleDownloadUpdate = async () => {
    setIsDownloading(true)
    await (window as any).ipcRenderer.invoke('download-update')
  }

  const handleInstallUpdate = () => {
    (window as any).ipcRenderer.invoke('install-update')
  }

  if (!updateAvailable && !updateDownloaded) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-blue-900 border border-blue-700 text-blue-200 px-6 py-4 rounded-lg shadow-lg max-w-sm z-50">
      {updateDownloaded ? (
        <>
          <p className="font-semibold mb-2">✓ Update Ready to Install</p>
          <p className="text-sm mb-3">A new version is ready. Restart the app to install.</p>
          <button
            onClick={handleInstallUpdate}
            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
          >
            Install & Restart
          </button>
        </>
      ) : (
        <>
          <p className="font-semibold mb-2">📥 New Update Available</p>
          <p className="text-sm mb-3">A new version of PlugHub is available.</p>
          <button
            onClick={handleDownloadUpdate}
            disabled={isDownloading}
            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-semibold rounded transition"
          >
            {isDownloading ? 'Downloading...' : 'Download Update'}
          </button>
        </>
      )}
    </div>
  )
}
