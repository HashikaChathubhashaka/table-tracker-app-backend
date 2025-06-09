import { Model } from 'mongoose';
import { TableStatus, TableStatusDocument } from './table-status.schema';
import { TableStatusGateway } from './table-status.gateway';
export declare class TableStatusService {
    private tableStatusModel;
    private readonly tableStatusGateway;
    constructor(tableStatusModel: Model<TableStatusDocument>, tableStatusGateway: TableStatusGateway);
    getAllTableStatuses(): Promise<TableStatus[]>;
    getTableStatusByTableName(tableName: string): Promise<TableStatus | null>;
    createTableStatus(tableStatus: TableStatus): Promise<TableStatus>;
    updateTableStatusByTableName(tableName: string, tableStatus: Partial<TableStatus>): Promise<TableStatus | null>;
    deleteTableStatusByTableName(tableName: string): Promise<TableStatus | null>;
}
