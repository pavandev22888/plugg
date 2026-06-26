import type { DAWConfig } from '../shared/types';
declare class Detector {
    getDAWPaths(): Promise<DAWConfig[]>;
    private getWindowsPaths;
    private getMacPaths;
}
export declare const detector: Detector;
export {};
//# sourceMappingURL=detector.d.ts.map