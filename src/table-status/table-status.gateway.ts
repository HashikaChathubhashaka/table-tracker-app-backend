import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import * as dotenv from 'dotenv'; 
dotenv.config(); 
@WebSocketGateway({
  cors: {
    origin: process.env.FRONTEND_URL, // React dev server
    methods: ['GET', 'POST'],
    credentials: true,
  },

})
export class TableStatusGateway {
  @WebSocketServer()
  server: Server;

  sendTableStatusUpdate(statusUpdate: any): void {
    this.server.emit('tableStatusUpdate', statusUpdate);
  }
}