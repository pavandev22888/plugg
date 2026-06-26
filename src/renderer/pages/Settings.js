import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export default function Settings() {
    const [daws] = useState([
        {
            name: 'FL Studio',
            installed: true,
            vst3Path: 'C:\\Program Files\\Common Files\\VST3\\',
        },
        {
            name: 'Reaper',
            installed: false,
            vst3Path: 'C:\\Program Files\\Common Files\\VST3\\',
        },
    ]);
    return (_jsxs("div", { className: "flex flex-col h-full bg-gray-900", children: [_jsx("div", { className: "p-8 border-b border-gray-700", children: _jsx("h2", { className: "text-3xl font-bold text-white", children: "Settings" }) }), _jsx("div", { className: "flex-1 overflow-y-auto p-8", children: _jsxs("div", { className: "max-w-2xl", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-6", children: "DAW Configuration" }), daws.length === 0 ? (_jsx("div", { className: "bg-yellow-900 border border-yellow-700 text-yellow-200 p-4 rounded-lg mb-8", children: "No DAWs detected. Please install a DAW to continue." })) : (_jsx("div", { className: "space-y-6 mb-8", children: daws.map(daw => (_jsxs("div", { className: "bg-gray-800 rounded-lg p-6 border border-gray-700", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx("h4", { className: "text-xl font-bold text-white", children: daw.name }), daw.installed ? (_jsx("span", { className: "px-3 py-1 bg-green-900 text-green-200 text-sm rounded-full", children: "\u2713 Installed" })) : (_jsx("span", { className: "px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full", children: "Not Found" }))] }), _jsx("div", { className: "space-y-3", children: _jsxs("div", { children: [_jsx("label", { className: "block text-sm text-gray-400 mb-2", children: "VST3 Path" }), _jsx("input", { type: "text", value: daw.vst3Path, readOnly: true, className: "w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded focus:outline-none" })] }) })] }, daw.name))) })), _jsxs("div", { className: "bg-gray-800 rounded-lg p-6 border border-gray-700 mb-8", children: [_jsx("h3", { className: "text-xl font-bold text-white mb-4", children: "Updates" }), _jsx("p", { className: "text-gray-400 text-sm mb-4", children: "PlugHub v0.1.0" }), _jsx("button", { className: "px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition", children: "Check for Updates" })] }), _jsxs("div", { className: "bg-gray-800 rounded-lg p-6 border border-gray-700", children: [_jsx("h3", { className: "text-xl font-bold text-white mb-4", children: "About PlugHub" }), _jsxs("div", { className: "text-gray-400 text-sm space-y-2", children: [_jsxs("p", { children: [_jsx("strong", { children: "Version:" }), " 0.1.0"] }), _jsxs("p", { children: [_jsx("strong", { children: "Description:" }), " A modern VST3 plugin manager for popular DAWs"] }), _jsx("p", { children: _jsx("strong", { children: "Features:" }) }), _jsxs("ul", { className: "list-disc list-inside ml-2", children: [_jsx("li", { children: "Browse and install plugins from GitHub" }), _jsx("li", { children: "Upload and share your own plugins" }), _jsx("li", { children: "Automatic updates" }), _jsx("li", { children: "Rating system for community feedback" })] })] })] })] }) })] }));
}
