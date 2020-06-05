import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
  } from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';
import { Socket } from 'dgram';
  
@WebSocketGateway(3001)
export class EventsGateway {
  @WebSocketServer()
  server: Server;
/*
  @SubscribeMessage('action')
  findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    //console.log('Serverbound Action:' + data);
    if (data.type === "button" && data.name === "panic") {
      console.log('Panic Button Pressed!');

      // EMIT SENDS TO ALL CONNECTED CLIENTS!
      this.server.emit('update', { selector:"#alert-panic", text:"Pressed!"})
    }
    return from([1, 2, 3]).pipe(map(item => ({ event: 'action', data: item })));
  }
*/

  @SubscribeMessage('action')
  action(@MessageBody() data: any): Observable<WsResponse<object>> {
    const actions = [
      { event: 'update', data: {
        selector:"#alert-panic",
        text: "You have triggered your panic button!"
      }},
      { event: 'show', data: { selector: "#alert-panic" }},
      { event: 'update', data: {
        selector: "#btnPanic",
        text: "Pressed!"
      }},
      { event: 'disable', data: { selector: "#btnPanic" }}
    ];
    
    this.server.emit('update', { selector: "#alert-panic", text: "Panic Button has been Triggered!" });

    if (data.type === "button" && data.name === "panic") {
      return from(actions).pipe(map(action => ({ event: action.event, data: action.data })));
    } else {
      return null;
    }

  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
      console.log('Identity: ' + data);
    return data;
  }
}