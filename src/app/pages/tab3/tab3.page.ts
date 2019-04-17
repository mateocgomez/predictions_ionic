import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  

  constructor( private usuarioService: UsuarioService
               ) { }

  ngOnInit() {
  }





  logout() {
    this.usuarioService.logout();
  }

}
