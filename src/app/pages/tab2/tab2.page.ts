import { Component } from '@angular/core';
import { TwitterSerivice } from '../../services/twitter.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  messagesv: Array<string> = ["a", "b"];

  constructor(private messageTwitter: TwitterSerivice){}
  ngOnInit(): void {
    this.messageTwitter.messages.subscribe(msg=>{
      this.messagesv.unshift(msg.nombre)
    });
  }

  sendMessage(){
    this.messageTwitter.sendMsg('test message');
  }


}
