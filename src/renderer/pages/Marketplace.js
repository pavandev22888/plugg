import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export default function Marketplace() {
    const [plugins] = useState([
        {
            id: '1',
            name: 'CoolSynth Pro',
            description: 'Professional synthesizer plugin',
            category: 'Synth',
            author: 'DevTeam',
            downloads: 1234,
            rating: 4.5,
            tags: ['synth', 'vst3', 'free'],
        },
        {
            id: '2',
            name: 'Echo Master',
            description: 'Advanced reverb and delay effects',
            category: 'Effect',
            author: 'AudioLabs',
            downloads: 892,
            rating: 4.7,
            tags: ['reverb', 'delay', 'effect'],
        },
    ]);
    const [showUploadForm, setShowUploadForm] = useState(false);
    const [uploadData, setUploadData] = useState({
        name: '',
        description: '',
        category: 'Synth',
        author: '',
        tags: '',
    });
    const handleUpload = (e) => {
        e.preventDefault();
        alert('Upload functionality requires backend setup');
        setUploadData({ name: '', description: '', category: 'Synth', author: '', tags: '' });
        setShowUploadForm(false);
    };
    return (_jsxs("div", { className: "flex flex-col h-full bg-gray-900", children: [_jsx("div", { className: "p-8 border-b border-gray-700", children: _jsxs("div", { className: "flex justify-between items-center", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-2", children: "\uD83C\uDFA8 PlugHub Marketplace" }), _jsx("p", { className: "text-gray-400", children: "Upload and share your VST3 plugins with the community" })] }), _jsx("button", { onClick: () => setShowUploadForm(!showUploadForm), className: "px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition", children: "+ Upload Plugin" })] }) }), showUploadForm && (_jsx("div", { className: "p-8 bg-gray-800 border-b border-gray-700", children: _jsxs("form", { onSubmit: handleUpload, className: "max-w-2xl", children: [_jsxs("div", { className: "grid grid-cols-2 gap-4 mb-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Plugin Name" }), _jsx("input", { type: "text", value: uploadData.name, onChange: e => setUploadData({ ...uploadData, name: e.target.value }), className: "w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-green-500", required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Author" }), _jsx("input", { type: "text", value: uploadData.author, onChange: e => setUploadData({ ...uploadData, author: e.target.value }), className: "w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-green-500", required: true })] })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Description" }), _jsx("textarea", { value: uploadData.description, onChange: e => setUploadData({ ...uploadData, description: e.target.value }), className: "w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-green-500 h-24", required: true })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4 mb-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Category" }), _jsxs("select", { value: uploadData.category, onChange: e => setUploadData({ ...uploadData, category: e.target.value }), className: "w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-green-500", children: [_jsx("option", { children: "Synth" }), _jsx("option", { children: "Effect" }), _jsx("option", { children: "Utility" }), _jsx("option", { children: "Instrument" }), _jsx("option", { children: "Filter" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Tags (comma separated)" }), _jsx("input", { type: "text", value: uploadData.tags, onChange: e => setUploadData({ ...uploadData, tags: e.target.value }), placeholder: "synth, vst3, free", className: "w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-green-500" })] })] }), _jsxs("div", { className: "flex gap-3", children: [_jsx("button", { type: "submit", className: "px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded transition", children: "Upload" }), _jsx("button", { type: "button", onClick: () => setShowUploadForm(false), className: "px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded transition", children: "Cancel" })] })] }) })), _jsx("div", { className: "flex-1 overflow-y-auto p-8", children: plugins.length === 0 ? (_jsx("div", { className: "text-gray-400 text-center py-8", children: "No plugins in marketplace yet. Be the first to upload!" })) : (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: plugins.map(plugin => (_jsxs("div", { className: "bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-green-500 transition", children: [_jsx("h3", { className: "text-xl font-bold text-white mb-2", children: plugin.name }), _jsx("p", { className: "text-gray-400 text-sm mb-3", children: plugin.description }), _jsxs("div", { className: "mb-3 flex items-center justify-between", children: [_jsx("span", { className: "inline-block px-3 py-1 bg-green-900 text-green-200 text-xs rounded-full", children: plugin.category }), _jsxs("span", { className: "text-xs text-gray-500", children: ["by ", plugin.author] })] }), _jsxs("div", { className: "mb-3 flex items-center gap-2", children: [_jsx("span", { className: "text-yellow-400", children: "\u2605" }), _jsxs("span", { className: "text-sm", children: [plugin.rating.toFixed(1), " \u00B7 ", plugin.downloads, " downloads"] })] }), _jsx("div", { className: "mb-4 flex gap-1 flex-wrap", children: plugin.tags.slice(0, 3).map((tag, i) => (_jsx("span", { className: "text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded", children: tag }, i))) }), _jsxs("div", { className: "space-y-2", children: [_jsx("button", { className: "w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded transition", children: "\u2B07\uFE0F Download" }), _jsx("div", { className: "flex gap-2", children: [1, 2, 3, 4, 5].map(star => (_jsx("button", { className: "flex-1 py-1 text-yellow-400 hover:bg-gray-700 rounded transition", children: "\u2605" }, star))) }), _jsx("button", { className: "w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded transition", children: "\uD83D\uDDD1\uFE0F Delete" })] })] }, plugin.id))) })) })] }));
}
