import { SettingsService } from './settings.service';
export declare class SettingsController {
    private readonly settingsService;
    constructor(settingsService: SettingsService);
    getTableCount(): Promise<number>;
    updateTableCount(tableCount: number): Promise<import("./settings.schema").Settings>;
}
