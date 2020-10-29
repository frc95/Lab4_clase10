import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken(){
    const logged = JSON.parse(localStorage.getItem('token'));
    return logged;
  }

  
}
