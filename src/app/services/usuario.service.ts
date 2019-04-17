import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { resolve } from 'q';
import { Usuario } from '../interfaces/interfaces';
import { identity } from 'rxjs';
import { NavController } from '@ionic/angular';


const URL = environment.url;


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  identity = null;
  private usuario: Usuario = {};
  constructor(private htpp: HttpClient,
              private storage: Storage,
              private navCtrl: NavController) {
              }

              login(email: string, password: string) {
                const data = {
                  email,
                  password
                };
                // tslint:disable-next-line:no-shadowed-variable
                return new Promise( resolve => {
                  this.htpp.post(`${URL}/user/login`, data)
                .subscribe( resp => {
                  if (resp['ok']) {
                    resolve(true);
                  } else {
                    resolve(false);
                  }

                });
                });
              }

              registro( usuario: Usuario ) {
                  return new Promise( resolve =>{
                    this.htpp.post(`${URL}/user/create`, usuario)
                    .subscribe(resp => {
                      console.log(resp);
                      if (resp['ok']) {
                        console.log('se registro');
                        resolve(true);
                      } else {
                        resolve(false);
                      }

                    })
                  });
              }

              logout(){
                this.navCtrl.navigateRoot('/login', {animated: true});
              }
}


