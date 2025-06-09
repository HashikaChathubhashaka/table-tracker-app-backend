import { Model } from 'mongoose';
import { Item } from './item.schema';
export declare class ItemsService {
    private readonly itemModel;
    constructor(itemModel: Model<Item>);
    create(createItemDto: {
        name: string;
        category: string;
        price: number;
    }): Promise<Item>;
    findAll(): Promise<Item[]>;
    findOne(id: string): Promise<Item | null>;
    update(id: string, updateItemDto: {
        name: string;
        category: string;
        price: number;
    }): Promise<Item | null>;
    remove(id: string): Promise<Item | null>;
    removeByName(name: string): Promise<import("mongodb").DeleteResult>;
}
