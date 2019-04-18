import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal') slides: IonSlides;

loginUser = {
  email: '',
  password: ''
};

registerUser: Usuario = {
  email: '',
  password: ''
}

  constructor( private usuarioService: UsuarioService,
                private navCtrl: NavController, private uiService: UiServiceService ) { }

  ngOnInit() {
    this.slides.lockSwipes(true);
  }

  async login( fLogin: NgForm ) {

    if (fLogin.invalid) {
      return;
    }

  const valido = await this.usuarioService.login(this.loginUser.email, this.loginUser.password);
  console.log(valido);

    if ( valido ) {
      // entramos al dashboard
      this.navCtrl.navigateRoot( 'main/tabs/tab1', {
        animated: true
      } );
    } else {
      // mostrar alerta de no correcto
      this.uiService.alertaInformativa('Tu usuario y contraseña no son correctos, intenta nuevamente');
    }



  }

  async registro( fRegistro: NgForm ) {
    if (fRegistro.invalid) {
      return;
    }

    const valido = await this.usuarioService.registro(this.registerUser);
    
    if ( valido ) {
      // entramos al dashboard
      this.navCtrl.navigateRoot( 'main/tabs/tab1', {
        animated: true
      } );
    } else {
      // mostrar alerta de no correcto
      this.uiService.alertaInformativa('Usuario ya existe!');
    }
  }



  mostrarRegistro() {
   this.slides.lockSwipes(false);
   this.slides.slideTo(0);
   this.slides.lockSwipes(true);
  }

  mostrarLogin() {
   this.slides.lockSwipes(false);
   this.slides.slideTo(1);
   this.slides.lockSwipes(true);
  }

}
