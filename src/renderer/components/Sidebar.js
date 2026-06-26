import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Sidebar({ currentPage, onPageChange }) {
    return (_jsxs("div", { className: "w-48 bg-gray-800 border-r border-gray-700 p-6", children: [_jsxs("div", { className: "mb-8", children: [_jsx("h1", { className: "text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent", children: "PlugHub" }), _jsx("p", { className: "text-gray-400 text-xs mt-1", children: "VST3 Plugin Manager" })] }), _jsxs("nav", { className: "space-y-3", children: [_jsx("button", { onClick: () => onPageChange('home'), className: `w-full text-left px-4 py-2 rounded-lg transition ${currentPage === 'home'
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-300 hover:bg-gray-700'}`, children: "\uD83D\uDD0D Browse GitHub" }), _jsx("button", { onClick: () => onPageChange('marketplace'), className: `w-full text-left px-4 py-2 rounded-lg transition ${currentPage === 'marketplace'
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-300 hover:bg-gray-700'}`, children: "\uD83C\uDFA8 PlugHub Market" }), _jsx("button", { onClick: () => onPageChange('installed'), className: `w-full text-left px-4 py-2 rounded-lg transition ${currentPage === 'installed'
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-300 hover:bg-gray-700'}`, children: "\u2713 Installed" }), _jsx("button", { onClick: () => onPageChange('settings'), className: `w-full text-left px-4 py-2 rounded-lg transition ${currentPage === 'settings'
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-300 hover:bg-gray-700'}`, children: "\u2699\uFE0F Settings" })] }), _jsx("div", { className: "mt-8 pt-8 border-t border-gray-700", children: _jsx("p", { className: "text-xs text-gray-500", children: "v0.1.0" }) })] }));
}
