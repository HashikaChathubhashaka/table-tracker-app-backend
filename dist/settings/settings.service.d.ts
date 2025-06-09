import { Model } from 'mongoose';
import { Settings } from './settings.schema';
export declare class SettingsService {
    private settingsModel;
    constructor(settingsModel: Model<Settings>);
    getTableCount(): Promise<number>;
    updateTableCount(count: number): Promise<Settings>;
}
