import { Octokit } from 'octokit'
import type { Plugin } from '../shared/types'

class GitHub {
  private octokit: Octokit
  private registryRepo = 'your-username/vst-plugins-registry'

  constructor() {
    this.octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    })
  }

  async getPlugins(): Promise<Plugin[]> {
    try {
      // Return demo plugins for now
      return [
        {
          id: 'surge-xt',
          name: 'Surge XT',
          description: 'Free open-source hybrid synthesizer',
          category: 'Synth',
          repo: 'surge-synthesizer/surge',
          assetPattern: '*.vst3.zip',
        },
        {
          id: 'vital',
          name: 'Vital',
          description: 'Spectral warping wavetable synth',
          category: 'Synth',
          repo: 'vital-audio/vital',
          assetPattern: '*.vst3.zip',
        },
      ]
    } catch (error) {
      console.error('Error fetching plugins:', error)
      return []
    }
  }

  async downloadRelease(repo: string, assetPattern: string): Promise<Buffer | null> {
    try {
      const [owner, repoName] = repo.split('/')

      const releases = await this.octokit.rest.repos.listReleases({
        owner,
        repo: repoName,
        per_page: 1,
      })

      if (releases.data.length === 0) {
        return null
      }

      const release = releases.data[0]
      const asset = release.assets?.find(a => this.matchesPattern(a.name, assetPattern))

      if (!asset) {
        return null
      }

      const response = await this.octokit.rest.repos.getReleaseAsset({
        owner,
        repo: repoName,
        asset_id: asset.id,
        headers: {
          Accept: 'application/octet-stream',
        },
      })

      return Buffer.from(response.data as any)
    } catch (error) {
      console.error('Error downloading release:', error)
      return null
    }
  }

  private matchesPattern(filename: string, pattern: string): boolean {
    const regex = new RegExp(pattern.replace('*', '.*'))
    return regex.test(filename)
  }
}

export const github = new GitHub()
