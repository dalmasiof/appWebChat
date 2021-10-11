import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { io } from 'socket.io-client';
import { message } from '../model/message';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private url = 'http://localhost:4231';
  private socket = io(this.url, { transports : ['websocket'] });
  private subjMessages:Subject<message> = new Subject<message>();


  constructor() {
    this.socket.on('message',(m)=>{
      this.subjMessages.next(m);
    })
  }

  send(message: message) {
    this.socket.emit("message",message)
  }

  messages(){
    return this.subjMessages as Observable<message>;
  }

  
}
