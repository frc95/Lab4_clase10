import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth : AngularFireAuth) { }

  ngOnInit(): void {
    this.login();
  }

  async login(){
    try{
      const rta=this.auth.signInWithEmailAndPassword("franco@mail.com","123456");
      console.log(rta);
    }catch(error){
      console.log(error);
    }

  }

}
