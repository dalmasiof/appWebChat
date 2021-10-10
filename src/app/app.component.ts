import { Component, OnInit } from '@angular/core';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'appWebChat';
  message!: string;

  constructor(private scktSvc: SocketService) {}

  sendMessage() {
    debugger  
    this.scktSvc.send(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.scktSvc.messages().subscribe((msg) => {
      console.log(msg);
    });
  }
}
