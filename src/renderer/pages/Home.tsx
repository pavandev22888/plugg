import { useState } from 'react'

interface Plugin {
  id: string
  name: string
  description: string
  category: string
  repo: string
}

export default function Home() {
  const [plugins] = useState<Plugin[]>([
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
  ])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDAW, setSelectedDAW] = useState('')

  const filteredPlugins = plugins.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col h-full bg-gray-900">
      <div className="p-8 border-b border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-6">Browse GitHub Plugins</h2>
        <input
          type="text"
          placeholder="Search plugins..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition"
        />
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        {filteredPlugins.length === 0 ? (
          <div className="text-gray-400 text-center py-8">No plugins found</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlugins.map(plugin => (
              <div key={plugin.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition">
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

                  <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition">
                    ⬇️ Install
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
