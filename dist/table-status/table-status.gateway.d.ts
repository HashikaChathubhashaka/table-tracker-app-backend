import { Server } from 'socket.io';
export declare class TableStatusGateway {
    server: Server;
    sendTableStatusUpdate(statusUpdate: any): void;
}
