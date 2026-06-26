export interface Plugin {
    id: string;
    name: string;
    description: string;
    category: string;
    repo: string;
    assetPattern: string;
    version?: string;
    installed?: boolean;
    author?: string;
    downloadCount?: number;
    rating?: number;
    tags?: string[];
}
export interface InstalledPlugin extends Plugin {
    installedPath: string;
    installedDate: string;
    installedVersion: string;
}
export interface DAWConfig {
    name: 'FL Studio' | 'Reaper' | 'Ableton' | 'Logic Pro';
    vst3Path: string;
    installed: boolean;
}
export interface InstallProgress {
    pluginId: string;
    status: 'pending' | 'downloading' | 'extracting' | 'installing' | 'completed' | 'error';
    progress: number;
    error?: string;
}
export interface UploadedPlugin {
    id: string;
    name: string;
    description: string;
    category: string;
    version: string;
    author: string;
    filePath: string;
    uploadDate: string;
    fileSize: number;
    downloads: number;
    rating: number;
    tags: string[];
    vst3File: Buffer;
}
export interface UpdateInfo {
    version: string;
    releaseDate: string;
    releaseNotes: string;
    downloadUrl: string;
    sha256: string;
}
//# sourceMappingURL=types.d.ts.map