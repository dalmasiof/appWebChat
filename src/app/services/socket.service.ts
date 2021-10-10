import { Injectable } from '@angular/core';

import * as socketio from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private url = 'http://localhost:5322/';
  // private sockt = socketio.(this.url);

  constructor(private sockt:SocketService) {

   }

  send(message:string){
    console.log(message)
  }
}
