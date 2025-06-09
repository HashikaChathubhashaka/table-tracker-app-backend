import { TableStatusService } from './table-status.service';
import { TableStatus } from './table-status.schema';
export declare class TableStatusController {
    private readonly tableStatusService;
    constructor(tableStatusService: TableStatusService);
    getAllTableStatuses(): Promise<TableStatus[]>;
    getTableStatusByTableName(tableName: string): Promise<TableStatus | null>;
    createTableStatus(tableStatus: TableStatus): Promise<TableStatus>;
    updateTableStatusByTableName(tableName: string, tableStatus: Partial<TableStatus>): Promise<TableStatus | null>;
    deleteTableStatusByTableName(tableName: string): Promise<TableStatus | null>;
}
