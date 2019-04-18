import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
import { environment } from '../../environments/environment';


@Injectable()
export class WebsocketService{
    private socket;
    constructor(){}
    conect():Rx.Subject<MessageEvent>{
        this.socket = io(environment.url);
        let observable = new Observable(observer=>{
            this.socket.on('messages',(data)=>{
                console.log("mensaje recibidos");
                observer.next(data);
            })
            return ()=>{
                this.socket.disconnect();
            }

        });

        let observer = {
            next:(data:Object) =>{
                this.socket.emmit('messages',JSON.stringify(data));
            }
        }
        return Rx.Subject.create(observer,observable)
    }
}

