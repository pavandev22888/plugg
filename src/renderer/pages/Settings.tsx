import { useState } from 'react'

interface DAW {
  name: string
  installed: boolean
  vst3Path: string
}

export default function Settings() {
  const [daws] = useState<DAW[]>([
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
  ])

  return (
    <div className="flex flex-col h-full bg-gray-900">
      <div className="p-8 border-b border-gray-700">
        <h2 className="text-3xl font-bold text-white">Settings</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">DAW Configuration</h3>

          {daws.length === 0 ? (
            <div className="bg-yellow-900 border border-yellow-700 text-yellow-200 p-4 rounded-lg mb-8">
              No DAWs detected. Please install a DAW to continue.
            </div>
          ) : (
            <div className="space-y-6 mb-8">
              {daws.map(daw => (
                <div key={daw.name} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">{daw.name}</h4>
                    {daw.installed ? (
                      <span className="px-3 py-1 bg-green-900 text-green-200 text-sm rounded-full">
                        ✓ Installed
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                        Not Found
                      </span>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">VST3 Path</label>
                      <input
                        type="text"
                        value={daw.vst3Path}
                        readOnly
                        className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Updates</h3>
            <p className="text-gray-400 text-sm mb-4">PlugHub v0.1.0</p>
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition">
              Check for Updates
            </button>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">About PlugHub</h3>
            <div className="text-gray-400 text-sm space-y-2">
              <p><strong>Version:</strong> 0.1.0</p>
              <p><strong>Description:</strong> A modern VST3 plugin manager for popular DAWs</p>
              <p><strong>Features:</strong></p>
              <ul className="list-disc list-inside ml-2">
                <li>Browse and install plugins from GitHub</li>
                <li>Upload and share your own plugins</li>
                <li>Automatic updates</li>
                <li>Rating system for community feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
