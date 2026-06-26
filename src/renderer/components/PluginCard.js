import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export default function PluginCard({ plugin }) {
    const [installing, setInstalling] = useState(false);
    const [selectedDAW, setSelectedDAW] = useState('');
    const handleInstall = async () => {
        if (!selectedDAW)
            return;
        setInstalling(true);
        try {
            await window.ipcRenderer.invoke('install-plugin', plugin.id, selectedDAW);
            // TODO: Show success message
        }
        catch (error) {
            console.error('Installation error:', error);
            // TODO: Show error message
        }
        finally {
            setInstalling(false);
        }
    };
    return (_jsxs("div", { className: "bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition", children: [_jsx("h3", { className: "text-xl font-bold text-white mb-2", children: plugin.name }), _jsx("p", { className: "text-gray-400 text-sm mb-3", children: plugin.description }), _jsx("div", { className: "mb-4", children: _jsx("span", { className: "inline-block px-3 py-1 bg-blue-900 text-blue-200 text-xs rounded-full", children: plugin.category }) }), _jsxs("div", { className: "space-y-3", children: [_jsxs("select", { value: selectedDAW, onChange: e => setSelectedDAW(e.target.value), className: "w-full px-3 py-2 bg-gray-700 text-white text-sm border border-gray-600 rounded focus:outline-none focus:border-blue-500", children: [_jsx("option", { value: "", children: "Select DAW..." }), _jsx("option", { value: "FL Studio", children: "FL Studio" }), _jsx("option", { value: "Reaper", children: "Reaper" }), _jsx("option", { value: "Ableton", children: "Ableton Live" }), _jsx("option", { value: "Logic Pro", children: "Logic Pro" })] }), _jsx("button", { onClick: handleInstall, disabled: !selectedDAW || installing, className: "w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-semibold rounded transition", children: installing ? 'Installing...' : 'Install' })] })] }));
}
