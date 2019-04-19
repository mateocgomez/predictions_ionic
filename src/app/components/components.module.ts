import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { TwitterSerivice } from '../services/twitter.service';
import { WebsocketService } from '../services/websocket.service';


@NgModule({
  declarations: [
    
    AvatarSelectorComponent,
    
  ],
  exports: [
   
    AvatarSelectorComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
   
  ],
  providers: [
    TwitterSerivice,
    WebsocketService
  ]
})
export class ComponentsModule { }

