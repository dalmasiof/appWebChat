import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private url = 'http://localhost:4231';
  private socket = io(this.url);
  private subjMessages:Subject<string> = new Subject<string>();


  constructor() {
    this.socket.on('message',(m)=>{
      this.subjMessages.next(m);
    })
  }

  send(message: string) {
    this.socket.emit("message",message)
  }

  messages(){
    return this.subjMessages as Observable<string>;
  }
}
