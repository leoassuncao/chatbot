import { Component, OnInit, Input } from '@angular/core';
import {Message} from '../../models';
import { DialogflowService } from '../../services';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  @Input('message')
  private message : Message;

  @Input('messages')
  private messages : Message[];

  constructor(private dialogFlowService: DialogflowService) { }
  
  ngOnInit() {
  }

 public sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);

    this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
      this.messages.push(
        new Message(res.result.fulfillment.speech, 'assets/bot.png',  "Bot", new Date())
      );
    });

    this.message = new Message('', 'assets/user.png', "Você", this.message.timestamp);
}


}