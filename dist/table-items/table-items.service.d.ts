import { Model } from 'mongoose';
import { TableItem } from './table-items.schema';
export declare class TableItemsService {
    private tableItemModel;
    constructor(tableItemModel: Model<TableItem>);
    addItem(tableNumber: number, item: TableItem): Promise<TableItem>;
    updateItems(tableNumber: number, items: TableItem[]): Promise<void>;
    clearItems(tableNumber: number): Promise<void>;
    getItemsByTableNumber(tableNumber: number): Promise<TableItem[]>;
    getTableOrderedBoolean(tableNumber: number): Promise<boolean>;
}
