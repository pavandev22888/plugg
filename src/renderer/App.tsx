import { useState } from 'react'

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'installed' | 'marketplace' | 'settings'>('home')

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <div className="w-48 bg-gray-800 border-r border-gray-700 p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            PlugHub
          </h1>
          <p className="text-gray-400 text-xs mt-1">VST3 Plugin Manager</p>
        </div>

        <nav className="space-y-3">
          <button
            onClick={() => setCurrentPage('home')}
            className={`w-full text-left px-4 py-2 rounded-lg transition ${
              currentPage === 'home'
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            🔍 Browse GitHub
          </button>

          <button
            onClick={() => setCurrentPage('marketplace')}
            className={`w-full text-left px-4 py-2 rounded-lg transition ${
              currentPage === 'marketplace'
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            🎨 PlugHub Market
          </button>

          <button
            onClick={() => setCurrentPage('installed')}
            className={`w-full text-left px-4 py-2 rounded-lg transition ${
              currentPage === 'installed'
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            ✓ Installed
          </button>

          <button
            onClick={() => setCurrentPage('settings')}
            className={`w-full text-left px-4 py-2 rounded-lg transition ${
              currentPage === 'settings'
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            ⚙️ Settings
          </button>
        </nav>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-xs text-gray-500">v0.1.0</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {currentPage === 'home' && (
          <div className="flex flex-col h-full bg-gray-900">
            <div className="p-8 border-b border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">Browse GitHub Plugins</h2>
              <input
                type="text"
                placeholder="Search plugins..."
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition"
              />
            </div>
            <div className="flex-1 overflow-y-auto p-8">
              <div className="text-gray-400 text-center py-12">
                <p className="text-2xl mb-4">🔍 Loading plugins from GitHub...</p>
                <p>Check the console for any errors.</p>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'marketplace' && (
          <div className="flex flex-col h-full bg-gray-900">
            <div className="p-8 border-b border-gray-700">
              <h2 className="text-3xl font-bold text-white">🎨 PlugHub Marketplace</h2>
            </div>
            <div className="flex-1 overflow-y-auto p-8">
              <div className="text-gray-400 text-center py-12">
                <p className="text-2xl">📤 Upload your plugins here</p>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'installed' && (
          <div className="flex flex-col h-full bg-gray-900">
            <div className="p-8 border-b border-gray-700">
              <h2 className="text-3xl font-bold text-white">Installed Plugins</h2>
            </div>
            <div className="flex-1 overflow-y-auto p-8">
              <div className="text-gray-400 text-center py-12">
                <p className="text-2xl">No plugins installed yet</p>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'settings' && (
          <div className="flex flex-col h-full bg-gray-900">
            <div className="p-8 border-b border-gray-700">
              <h2 className="text-3xl font-bold text-white">Settings</h2>
            </div>
            <div className="flex-1 overflow-y-auto p-8">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">DAW Configuration</h3>
                <div className="bg-yellow-900 border border-yellow-700 text-yellow-200 p-4 rounded-lg">
                  No DAWs detected. Please install a DAW to continue.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
