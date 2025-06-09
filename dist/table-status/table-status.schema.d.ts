import { Document } from 'mongoose';
export type TableStatusDocument = TableStatus & Document;
export declare class TableStatus {
    tableName: string;
    ordered: boolean;
    preparing: boolean;
    prepared: boolean;
    served: boolean;
    billed: boolean;
    orderedBy: string;
    preparingBy: string;
    preparedBy: string;
    servedBy: string;
    billedBy: string;
}
export declare const TableStatusSchema: import("mongoose").Schema<TableStatus, import("mongoose").Model<TableStatus, any, any, any, Document<unknown, any, TableStatus> & TableStatus & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TableStatus, Document<unknown, {}, import("mongoose").FlatRecord<TableStatus>> & import("mongoose").FlatRecord<TableStatus> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
