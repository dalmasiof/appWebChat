import { Component, OnInit } from '@angular/core';
import { message } from './model/message';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'appWebChat';
  message!: string;
  name!: string;

  messages: message[] = [];

  constructor(private scktSvc: SocketService) {
    this.scktSvc.messages().subscribe((x) => {
      this.messages.push(x)
    });
  }

  sendMessage() {
    let objMessage: message = {
      name: this.name,
      message: this.message,
    };

    this.scktSvc.send(objMessage);
    this.message = '';
  }
}
