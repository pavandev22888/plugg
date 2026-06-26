import { Octokit } from 'octokit';
class GitHub {
    constructor() {
        Object.defineProperty(this, "octokit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "registryRepo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'your-username/vst-plugins-registry'
        });
        this.octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN,
        });
    }
    async getPlugins() {
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
            ];
        }
        catch (error) {
            console.error('Error fetching plugins:', error);
            return [];
        }
    }
    async downloadRelease(repo, assetPattern) {
        try {
            const [owner, repoName] = repo.split('/');
            const releases = await this.octokit.rest.repos.listReleases({
                owner,
                repo: repoName,
                per_page: 1,
            });
            if (releases.data.length === 0) {
                return null;
            }
            const release = releases.data[0];
            const asset = release.assets?.find(a => this.matchesPattern(a.name, assetPattern));
            if (!asset) {
                return null;
            }
            const response = await this.octokit.rest.repos.getReleaseAsset({
                owner,
                repo: repoName,
                asset_id: asset.id,
                headers: {
                    Accept: 'application/octet-stream',
                },
            });
            return Buffer.from(response.data);
        }
        catch (error) {
            console.error('Error downloading release:', error);
            return null;
        }
    }
    matchesPattern(filename, pattern) {
        const regex = new RegExp(pattern.replace('*', '.*'));
        return regex.test(filename);
    }
}
export const github = new GitHub();
