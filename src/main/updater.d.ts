import { BrowserWindow } from 'electron';
declare class Updater {
    private mainWindow;
    configure(mainWindow: BrowserWindow): void;
    downloadUpdate(): void;
    installUpdate(): void;
    checkForUpdates(): any;
}
export declare const updater: Updater;
export {};
//# sourceMappingURL=updater.d.ts.map