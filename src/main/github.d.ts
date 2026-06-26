import type { Plugin } from '../shared/types';
declare class GitHub {
    private octokit;
    private registryRepo;
    constructor();
    getPlugins(): Promise<Plugin[]>;
    downloadRelease(repo: string, assetPattern: string): Promise<Buffer | null>;
    private matchesPattern;
}
export declare const github: GitHub;
export {};
//# sourceMappingURL=github.d.ts.map