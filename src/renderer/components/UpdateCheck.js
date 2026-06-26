import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
export default function UpdateCheck() {
    const [updateAvailable, setUpdateAvailable] = useState(false);
    const [updateDownloaded, setUpdateDownloaded] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    useEffect(() => {
        const ipcRenderer = window.ipcRenderer;
        // Listen for update available
        ipcRenderer.on('update-available', (data) => {
            setUpdateAvailable(true);
            console.log('Update available:', data);
        });
        // Listen for update downloaded
        ipcRenderer.on('update-downloaded', () => {
            setUpdateDownloaded(true);
            setIsDownloading(false);
        });
        // Listen for update error
        ipcRenderer.on('update-error', (error) => {
            console.error('Update error:', error);
            setIsDownloading(false);
        });
        // Check for updates on mount
        ipcRenderer.invoke('check-updates');
        return () => {
            // Cleanup listeners
        };
    }, []);
    const handleDownloadUpdate = async () => {
        setIsDownloading(true);
        await window.ipcRenderer.invoke('download-update');
    };
    const handleInstallUpdate = () => {
        window.ipcRenderer.invoke('install-update');
    };
    if (!updateAvailable && !updateDownloaded) {
        return null;
    }
    return (_jsx("div", { className: "fixed bottom-4 right-4 bg-blue-900 border border-blue-700 text-blue-200 px-6 py-4 rounded-lg shadow-lg max-w-sm z-50", children: updateDownloaded ? (_jsxs(_Fragment, { children: [_jsx("p", { className: "font-semibold mb-2", children: "\u2713 Update Ready to Install" }), _jsx("p", { className: "text-sm mb-3", children: "A new version is ready. Restart the app to install." }), _jsx("button", { onClick: handleInstallUpdate, className: "w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition", children: "Install & Restart" })] })) : (_jsxs(_Fragment, { children: [_jsx("p", { className: "font-semibold mb-2", children: "\uD83D\uDCE5 New Update Available" }), _jsx("p", { className: "text-sm mb-3", children: "A new version of PlugHub is available." }), _jsx("button", { onClick: handleDownloadUpdate, disabled: isDownloading, className: "w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-semibold rounded transition", children: isDownloading ? 'Downloading...' : 'Download Update' })] })) }));
}
