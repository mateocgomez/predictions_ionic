import { Injectable } from '@angular/core';
import { WebsocketService } from '../services/websocket.service';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class TwitterSerivice {

    messages: Subject<any>;
  

    constructor(private wsService: WebsocketService) {
      
        this.messages = <Subject<any>>wsService
            .conect()
            .map((response: any): any => {
                return response
            })
    }

    sendMsg(msg) {
        this.messages.next(msg);
    }

}