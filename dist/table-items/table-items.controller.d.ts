import { TableItemsService } from './table-items.service';
import { TableItem } from './table-items.schema';
export declare class TableItemsController {
    private readonly tableItemsService;
    constructor(tableItemsService: TableItemsService);
    addItem(tableNumber: number, item: TableItem): Promise<TableItem>;
    updateItems(tableNumber: number, items: TableItem[]): Promise<void>;
    clearItems(tableNumber: number): Promise<void>;
    getItemsByTableNumber(tableNumber: number): Promise<TableItem[]>;
    getTableOrderedBoolean(tableNumber: number): Promise<boolean>;
}
