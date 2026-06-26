import type { InstalledPlugin } from '../shared/types';
declare class Installer {
    private installedFile;
    installPlugin(pluginId: string, dawName: string): Promise<boolean>;
    uninstallPlugin(pluginId: string, dawName: string): Promise<boolean>;
    getInstalledPlugins(): InstalledPlugin[];
    private saveInstalledPlugins;
}
export declare const installer: Installer;
export {};
//# sourceMappingURL=installer.d.ts.map