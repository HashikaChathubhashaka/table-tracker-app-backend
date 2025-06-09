import { ItemsService } from './items.service';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    create(createItemDto: {
        name: string;
        category: string;
        price: number;
    }): Promise<import("./item.schema").Item>;
    findAll(): Promise<import("./item.schema").Item[]>;
    update(id: string, updateItemDto: {
        name: string;
        category: string;
        price: number;
    }): Promise<import("./item.schema").Item | null>;
    removeByName(name: string): Promise<import("mongodb").DeleteResult>;
}
