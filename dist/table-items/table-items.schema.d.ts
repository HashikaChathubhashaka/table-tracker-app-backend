import { Document } from 'mongoose';
export declare class TableItem extends Document {
    name: string;
    price: number;
    quantity: number;
    tableNumber: number;
}
export declare const TableItemSchema: import("mongoose").Schema<TableItem, import("mongoose").Model<TableItem, any, any, any, Document<unknown, any, TableItem> & TableItem & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TableItem, Document<unknown, {}, import("mongoose").FlatRecord<TableItem>> & import("mongoose").FlatRecord<TableItem> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
