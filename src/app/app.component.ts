import { Component } from '@angular/core';
import {Message} from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public message : Message;
  public messages : Message[];


  constructor(){
    this.message = new Message('', 'assets/images/user.png', "Você", new Date());
    this.messages = [
      new Message('Seja bem-vindo', 'assets/images/bot.png', "Bot", new Date())
    ];
  }
}