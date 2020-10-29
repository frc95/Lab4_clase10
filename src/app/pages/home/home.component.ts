import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario:string = "";
  mensajes = new Array();
  mensaje: string;
  

  constructor(private chatSVC : ChatService) { }

  ngOnInit(): void {
    this.chatSVC.traerListaMensajes().subscribe(doc => {
      this.mensajes = doc;

      this.mensajes = this.mensajes.sort((a,b)=>{
        let flag : number = 0;
        if(a.milisegundos < b.milisegundos){
          flag = -1;
        }
        else if(a.milisegundos > b.milisegundos){
          flag = 1;
        }
        return flag;
      });
    });
  }

  async enviarMensaje(){
    if(this.mensaje != "" && this.usuario != ""){
      let fecha = Date.now();
      let id = this.usuario + "." + fecha;
      this.chatSVC.guardarMensaje(id, this.usuario, this.mensaje, fecha);
    }
  }

  
}
