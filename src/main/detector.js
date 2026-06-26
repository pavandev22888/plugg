import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
const execAsync = promisify(exec);
class Detector {
    async getDAWPaths() {
        const daws = [];
        const platform = process.platform;
        if (platform === 'win32') {
            daws.push(...await this.getWindowsPaths());
        }
        else if (platform === 'darwin') {
            daws.push(...await this.getMacPaths());
        }
        return daws;
    }
    async getWindowsPaths() {
        const daws = [];
        const vst3Path = 'C:\\Program Files\\Common Files\\VST3';
        const configs = [
            { name: 'FL Studio', regPath: 'HKEY_LOCAL_MACHINE\\SOFTWARE\\Image-Line\\FL Studio' },
            { name: 'Reaper', regPath: 'HKEY_LOCAL_MACHINE\\SOFTWARE\\Cockos\\Reaper' },
            { name: 'Ableton', regPath: 'HKEY_LOCAL_MACHINE\\SOFTWARE\\Ableton' },
        ];
        for (const { name, regPath } of configs) {
            try {
                // Check if installed via registry
                await execAsync(`reg query "${regPath}"`);
                daws.push({
                    name,
                    vst3Path,
                    installed: true,
                });
            }
            catch {
                // DAW not found
            }
        }
        return daws;
    }
    async getMacPaths() {
        const daws = [];
        const vst3Paths = [
            '/Library/Audio/Plug-Ins/VST3',
            path.join(process.env.HOME || '', 'Library/Audio/Plug-Ins/VST3'),
        ];
        const appPaths = [
            { name: 'Ableton', appPath: '/Applications/Ableton Live 12.app' },
            { name: 'Logic Pro', appPath: '/Applications/Logic Pro.app' },
            { name: 'Reaper', appPath: '/Applications/REAPER.app' },
        ];
        for (const { name, appPath } of appPaths) {
            if (fs.existsSync(appPath)) {
                daws.push({
                    name,
                    vst3Path: vst3Paths[0],
                    installed: true,
                });
            }
        }
        return daws;
    }
}
export const detector = new Detector();
