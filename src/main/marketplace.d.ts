import type { UploadedPlugin } from '../shared/types';
declare class Marketplace {
    private marketplaceDir;
    private pluginsDb;
    constructor();
    private ensureDirectories;
    uploadPlugin(name: string, description: string, category: string, author: string, tags: string[], vst3FilePath: string): Promise<UploadedPlugin>;
    getPlugins(): UploadedPlugin[];
    getPluginById(id: string): UploadedPlugin | null;
    downloadPlugin(id: string, downloadPath: string): boolean;
    ratePlugin(id: string, rating: number): boolean;
    deletePlugin(id: string): boolean;
    private incrementDownloadCount;
    private saveToDatabase;
    private getAllPluginsData;
    private saveDatabase;
}
export declare const marketplace: Marketplace;
export {};
//# sourceMappingURL=marketplace.d.ts.map