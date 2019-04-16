import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { resolve } from 'q';
import { Usuario } from '../interfaces/interfaces';


const URL = environment.url;


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  constructor(private htpp: HttpClient,
              private storage: Storage) { }

              login(email: string, password: string) {
                const data = {
                  email,
                  password
                };
                // tslint:disable-next-line:no-shadowed-variable
                return new Promise( resolve => {
                  this.htpp.post(`${URL}/user/login`, data)
                .subscribe( resp => {
                  console.log(resp);

                  if (resp['ok']) {
                    console.log('entro');
                    resolve(true);
                  } else {
                    resolve(false);

                  }

                });
                });
              }

              registro( usuario: Usuario ){

              }

}


