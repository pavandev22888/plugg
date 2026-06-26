import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
class Marketplace {
    constructor() {
        Object.defineProperty(this, "marketplaceDir", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: path.join(process.env.APPDATA || '', 'PlugHub', 'marketplace')
        });
        Object.defineProperty(this, "pluginsDb", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: path.join(this.marketplaceDir, 'plugins.json')
        });
        this.ensureDirectories();
    }
    ensureDirectories() {
        if (!fs.existsSync(this.marketplaceDir)) {
            fs.mkdirSync(this.marketplaceDir, { recursive: true });
        }
    }
    async uploadPlugin(name, description, category, author, tags, vst3FilePath) {
        const pluginId = uuidv4();
        const fileData = fs.readFileSync(vst3FilePath);
        const fileSize = fileData.length;
        const fileName = `${pluginId}.vst3`;
        const storagePath = path.join(this.marketplaceDir, fileName);
        // Save file
        fs.writeFileSync(storagePath, fileData);
        // Create plugin entry
        const plugin = {
            id: pluginId,
            name,
            description,
            category,
            version: '1.0.0',
            author,
            filePath: storagePath,
            uploadDate: new Date().toISOString(),
            fileSize,
            downloads: 0,
            rating: 0,
            tags,
            vst3File: fileData,
        };
        // Save to database
        this.saveToDatabase(plugin);
        return plugin;
    }
    getPlugins() {
        try {
            if (fs.existsSync(this.pluginsDb)) {
                const data = fs.readFileSync(this.pluginsDb, 'utf-8');
                const plugins = JSON.parse(data);
                return plugins.map((p) => ({
                    ...p,
                    vst3File: fs.readFileSync(p.filePath),
                }));
            }
        }
        catch (error) {
            console.error('Error reading marketplace database:', error);
        }
        return [];
    }
    getPluginById(id) {
        const plugins = this.getPlugins();
        return plugins.find(p => p.id === id) || null;
    }
    downloadPlugin(id, downloadPath) {
        const plugin = this.getPluginById(id);
        if (!plugin)
            return false;
        try {
            fs.copyFileSync(plugin.filePath, downloadPath);
            // Update download count
            this.incrementDownloadCount(id);
            return true;
        }
        catch (error) {
            console.error('Error downloading plugin:', error);
            return false;
        }
    }
    ratePlugin(id, rating) {
        if (rating < 0 || rating > 5)
            return false;
        try {
            const plugins = this.getAllPluginsData();
            const plugin = plugins.find(p => p.id === id);
            if (!plugin)
                return false;
            // Simple rating system (could be improved)
            plugin.rating = (plugin.rating + rating) / 2;
            this.saveDatabase(plugins);
            return true;
        }
        catch (error) {
            console.error('Error rating plugin:', error);
            return false;
        }
    }
    deletePlugin(id) {
        try {
            const plugins = this.getAllPluginsData();
            const pluginIndex = plugins.findIndex(p => p.id === id);
            if (pluginIndex === -1)
                return false;
            const plugin = plugins[pluginIndex];
            // Delete file
            if (fs.existsSync(plugin.filePath)) {
                fs.unlinkSync(plugin.filePath);
            }
            // Remove from database
            plugins.splice(pluginIndex, 1);
            this.saveDatabase(plugins);
            return true;
        }
        catch (error) {
            console.error('Error deleting plugin:', error);
            return false;
        }
    }
    incrementDownloadCount(id) {
        try {
            const plugins = this.getAllPluginsData();
            const plugin = plugins.find(p => p.id === id);
            if (plugin) {
                plugin.downloads = (plugin.downloads || 0) + 1;
                this.saveDatabase(plugins);
            }
        }
        catch (error) {
            console.error('Error incrementing download count:', error);
        }
    }
    saveToDatabase(plugin) {
        const plugins = this.getAllPluginsData();
        plugins.push({
            id: plugin.id,
            name: plugin.name,
            description: plugin.description,
            category: plugin.category,
            version: plugin.version,
            author: plugin.author,
            filePath: plugin.filePath,
            uploadDate: plugin.uploadDate,
            fileSize: plugin.fileSize,
            downloads: plugin.downloads,
            rating: plugin.rating,
            tags: plugin.tags,
        });
        this.saveDatabase(plugins);
    }
    getAllPluginsData() {
        try {
            if (fs.existsSync(this.pluginsDb)) {
                const data = fs.readFileSync(this.pluginsDb, 'utf-8');
                return JSON.parse(data);
            }
        }
        catch (error) {
            console.error('Error reading database:', error);
        }
        return [];
    }
    saveDatabase(plugins) {
        fs.writeFileSync(this.pluginsDb, JSON.stringify(plugins, null, 2));
    }
}
export const marketplace = new Marketplace();
