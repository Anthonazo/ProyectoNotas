import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Nota } from '../models/Nota';


@Injectable({
  providedIn: 'root'
})
export class NotasFirebaseService {

  path = '/notas'

  notasRef: AngularFirestoreCollection<any>

  constructor(private db: AngularFirestore) {
    this.notasRef = db.collection(this.path)

  }

  /* 
  Metodo para obtener las notas del firebase
  */

  getAll() {
    return this.notasRef.valueChanges()
  }

  /* 
  metodo para actualizar las notas del firebase
  */

  update(nota: Nota) {
    const notaDoc = this.notasRef.doc(nota.uid);
    return notaDoc.update({ titulo: nota.titulo, contenido: nota.contenido });  }

  /*  
  metodo para eliminar las notas del firebase
  */
  delete(nota: Nota) { 
    this.notasRef.doc(nota.uid).delete();

  }

  /* 
  metodo para agregar nota al firebase
  */
  save(nota: Nota) {
    const uid = this.db.createId()
    nota.uid = uid
    console.log('Nota:', nota)
    return this.notasRef.doc(uid).set(Object.assign({}, nota))
  }

}
