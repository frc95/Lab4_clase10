import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  

  constructor(private afs: AngularFirestore) {}

  public guardarMensaje(id:string,usuario:string,mensaje:string,milisegundos:number){
    return this.afs.collection("mensajes").add({
      id: id,
      usuario: usuario,
      mensaje: mensaje,
      milisegundos: milisegundos

    });
  }

  public traerListaMensajes(){
    return this.afs.collection("mensajes").valueChanges();
  }
}
