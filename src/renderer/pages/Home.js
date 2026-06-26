import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export default function Home() {
    const [plugins] = useState([
        {
            id: 'surge-xt',
            name: 'Surge XT',
            description: 'Free, open-source hybrid synthesizer',
            category: 'Synth',
            repo: 'surge-synthesizer/surge',
        },
        {
            id: 'vital',
            name: 'Vital',
            description: 'Spectral warping wavetable synth',
            category: 'Synth',
            repo: 'vital-audio/vital',
        },
        {
            id: 'dexed',
            name: 'Dexed',
            description: 'FM synthesis engine',
            category: 'Synth',
            repo: 'asb2m10/dexed',
        },
        {
            id: 'helm',
            name: 'Helm',
            description: 'Polyphonic synthesizer',
            category: 'Synth',
            repo: 'mtytel/helm',
        },
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDAW, setSelectedDAW] = useState('');
    const filteredPlugins = plugins.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()));
    return (_jsxs("div", { className: "flex flex-col h-full bg-gray-900", children: [_jsxs("div", { className: "p-8 border-b border-gray-700", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-6", children: "Browse GitHub Plugins" }), _jsx("input", { type: "text", placeholder: "Search plugins...", value: searchTerm, onChange: e => setSearchTerm(e.target.value), className: "w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition" })] }), _jsx("div", { className: "flex-1 overflow-y-auto p-8", children: filteredPlugins.length === 0 ? (_jsx("div", { className: "text-gray-400 text-center py-8", children: "No plugins found" })) : (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredPlugins.map(plugin => (_jsxs("div", { className: "bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition", children: [_jsx("h3", { className: "text-xl font-bold text-white mb-2", children: plugin.name }), _jsx("p", { className: "text-gray-400 text-sm mb-3", children: plugin.description }), _jsx("div", { className: "mb-4", children: _jsx("span", { className: "inline-block px-3 py-1 bg-blue-900 text-blue-200 text-xs rounded-full", children: plugin.category }) }), _jsxs("div", { className: "space-y-3", children: [_jsxs("select", { value: selectedDAW, onChange: e => setSelectedDAW(e.target.value), className: "w-full px-3 py-2 bg-gray-700 text-white text-sm border border-gray-600 rounded focus:outline-none focus:border-blue-500", children: [_jsx("option", { value: "", children: "Select DAW..." }), _jsx("option", { value: "FL Studio", children: "FL Studio" }), _jsx("option", { value: "Reaper", children: "Reaper" }), _jsx("option", { value: "Ableton", children: "Ableton Live" }), _jsx("option", { value: "Logic Pro", children: "Logic Pro" })] }), _jsx("button", { className: "w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition", children: "\u2B07\uFE0F Install" })] })] }, plugin.id))) })) })] }));
}
