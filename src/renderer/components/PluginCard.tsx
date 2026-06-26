import { useState } from 'react'
import type { Plugin } from '../../shared/types'

interface PluginCardProps {
  plugin: Plugin
}

export default function PluginCard({ plugin }: PluginCardProps) {
  const [installing, setInstalling] = useState(false)
  const [selectedDAW, setSelectedDAW] = useState<string>('')

  const handleInstall = async () => {
    if (!selectedDAW) return

    setInstalling(true)
    try {
      await (window as any).ipcRenderer.invoke('install-plugin', plugin.id, selectedDAW)
      // TODO: Show success message
    } catch (error) {
      console.error('Installation error:', error)
      // TODO: Show error message
    } finally {
      setInstalling(false)
    }
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition">
      <h3 className="text-xl font-bold text-white mb-2">{plugin.name}</h3>
      <p className="text-gray-400 text-sm mb-3">{plugin.description}</p>

      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-blue-900 text-blue-200 text-xs rounded-full">
          {plugin.category}
        </span>
      </div>

      <div className="space-y-3">
        <select
          value={selectedDAW}
          onChange={e => setSelectedDAW(e.target.value)}
          className="w-full px-3 py-2 bg-gray-700 text-white text-sm border border-gray-600 rounded focus:outline-none focus:border-blue-500"
        >
          <option value="">Select DAW...</option>
          <option value="FL Studio">FL Studio</option>
          <option value="Reaper">Reaper</option>
          <option value="Ableton">Ableton Live</option>
          <option value="Logic Pro">Logic Pro</option>
        </select>

        <button
          onClick={handleInstall}
          disabled={!selectedDAW || installing}
          className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-semibold rounded transition"
        >
          {installing ? 'Installing...' : 'Install'}
        </button>
      </div>
    </div>
  )
}
