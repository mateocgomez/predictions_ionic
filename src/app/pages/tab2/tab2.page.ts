import { Component } from '@angular/core';
import { TwitterSerivice } from '../../services/twitter.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  user: Array<string> = ['@UCatolicaCol', 'Esta es la base del conocimiento para otros proyectos de grado más.'];
  president: Array<string> = [''];

  constructor(private messageTwitter: TwitterSerivice){}
  ngOnInit(): void {
    this.messageTwitter.messages.subscribe(msg=>{
      this.user.unshift(msg.user, msg.message );
      console.log(msg.calculate['@IvanDuque'].positivo);
    });
  }


}
