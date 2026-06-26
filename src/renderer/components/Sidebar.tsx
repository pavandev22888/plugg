interface SidebarProps {
  currentPage: 'home' | 'installed' | 'marketplace' | 'settings'
  onPageChange: (page: 'home' | 'installed' | 'marketplace' | 'settings') => void
}

export default function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  return (
    <div className="w-48 bg-gray-800 border-r border-gray-700 p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          PlugHub
        </h1>
        <p className="text-gray-400 text-xs mt-1">VST3 Plugin Manager</p>
      </div>

      <nav className="space-y-3">
        <button
          onClick={() => onPageChange('home')}
          className={`w-full text-left px-4 py-2 rounded-lg transition ${
            currentPage === 'home'
              ? 'bg-blue-600 text-white'
              : 'text-gray-300 hover:bg-gray-700'
          }`}
        >
          🔍 Browse GitHub
        </button>

        <button
          onClick={() => onPageChange('marketplace')}
          className={`w-full text-left px-4 py-2 rounded-lg transition ${
            currentPage === 'marketplace'
              ? 'bg-blue-600 text-white'
              : 'text-gray-300 hover:bg-gray-700'
          }`}
        >
          🎨 PlugHub Market
        </button>

        <button
          onClick={() => onPageChange('installed')}
          className={`w-full text-left px-4 py-2 rounded-lg transition ${
            currentPage === 'installed'
              ? 'bg-blue-600 text-white'
              : 'text-gray-300 hover:bg-gray-700'
          }`}
        >
          ✓ Installed
        </button>

        <button
          onClick={() => onPageChange('settings')}
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
  )
}
