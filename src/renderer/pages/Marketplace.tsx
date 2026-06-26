import { useState } from 'react'

interface MarketplacePlugin {
  id: string
  name: string
  description: string
  category: string
  author: string
  downloads: number
  rating: number
  tags: string[]
}

export default function Marketplace() {
  const [plugins] = useState<MarketplacePlugin[]>([
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
  ])
  const [showUploadForm, setShowUploadForm] = useState(false)
  const [uploadData, setUploadData] = useState({
    name: '',
    description: '',
    category: 'Synth',
    author: '',
    tags: '',
  })

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Upload functionality requires backend setup')
    setUploadData({ name: '', description: '', category: 'Synth', author: '', tags: '' })
    setShowUploadForm(false)
  }

  return (
    <div className="flex flex-col h-full bg-gray-900">
      <div className="p-8 border-b border-gray-700">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">🎨 PlugHub Marketplace</h2>
            <p className="text-gray-400">Upload and share your VST3 plugins with the community</p>
          </div>
          <button
            onClick={() => setShowUploadForm(!showUploadForm)}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition"
          >
            + Upload Plugin
          </button>
        </div>
      </div>

      {showUploadForm && (
        <div className="p-8 bg-gray-800 border-b border-gray-700">
          <form onSubmit={handleUpload} className="max-w-2xl">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2">Plugin Name</label>
                <input
                  type="text"
                  value={uploadData.name}
                  onChange={e => setUploadData({ ...uploadData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Author</label>
                <input
                  type="text"
                  value={uploadData.author}
                  onChange={e => setUploadData({ ...uploadData, author: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-green-500"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                value={uploadData.description}
                onChange={e => setUploadData({ ...uploadData, description: e.target.value })}
                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-green-500 h-24"
                required
              ></textarea>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  value={uploadData.category}
                  onChange={e => setUploadData({ ...uploadData, category: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-green-500"
                >
                  <option>Synth</option>
                  <option>Effect</option>
                  <option>Utility</option>
                  <option>Instrument</option>
                  <option>Filter</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tags (comma separated)</label>
                <input
                  type="text"
                  value={uploadData.tags}
                  onChange={e => setUploadData({ ...uploadData, tags: e.target.value })}
                  placeholder="synth, vst3, free"
                  className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-green-500"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded transition"
              >
                Upload
              </button>
              <button
                type="button"
                onClick={() => setShowUploadForm(false)}
                className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-8">
        {plugins.length === 0 ? (
          <div className="text-gray-400 text-center py-8">No plugins in marketplace yet. Be the first to upload!</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plugins.map(plugin => (
              <div
                key={plugin.id}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-green-500 transition"
              >
                <h3 className="text-xl font-bold text-white mb-2">{plugin.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{plugin.description}</p>

                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-green-900 text-green-200 text-xs rounded-full">
                    {plugin.category}
                  </span>
                  <span className="text-xs text-gray-500">by {plugin.author}</span>
                </div>

                <div className="mb-3 flex items-center gap-2">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm">{plugin.rating.toFixed(1)} · {plugin.downloads} downloads</span>
                </div>

                <div className="mb-4 flex gap-1 flex-wrap">
                  {plugin.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  <button className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded transition">
                    ⬇️ Download
                  </button>

                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        className="flex-1 py-1 text-yellow-400 hover:bg-gray-700 rounded transition"
                      >
                        ★
                      </button>
                    ))}
                  </div>

                  <button className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded transition">
                    🗑️ Delete
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
