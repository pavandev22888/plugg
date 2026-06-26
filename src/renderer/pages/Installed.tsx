import { useState } from 'react'

interface InstalledPlugin {
  id: string
  name: string
  description: string
  installedDate: string
  version: string
}

export default function Installed() {
  const [plugins] = useState<InstalledPlugin[]>([])

  return (
    <div className="flex flex-col h-full bg-gray-900">
      <div className="p-8 border-b border-gray-700">
        <h2 className="text-3xl font-bold text-white">Installed Plugins</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        {plugins.length === 0 ? (
          <div className="text-gray-400 text-center py-12">
            <p className="text-2xl mb-4">No plugins installed yet</p>
            <p>Go to "Browse GitHub" or "PlugHub Market" to install plugins</p>
          </div>
        ) : (
          <div className="space-y-4">
            {plugins.map(plugin => (
              <div key={plugin.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{plugin.name}</h3>
                    <p className="text-gray-400 text-sm mb-2">{plugin.description}</p>
                    <div className="text-xs text-gray-500">
                      v{plugin.version} · Installed: {plugin.installedDate}
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition">
                    Uninstall
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
