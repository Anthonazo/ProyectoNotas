import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nota } from 'src/app/models/Nota';
import { NotasFirebaseService } from 'src/app/services/notas-firebase.service';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent {
  notasFirebase: any;
  nota: Nota | null = null;

  /* 
  Pasamos los parametros para buscar la nota mediante el uid
  esto mediante el obtenernotas
  */
  constructor(
    private firebaseNotas: NotasFirebaseService,
    private route: ActivatedRoute,
  ) {
    const uid = this.route.snapshot.paramMap.get('uid')

    if (uid) {
      this.obtenerNotas(uid)
    }
  }

  /* 
  Metodo de obtener notas que busca en el firebase
  */
  obtenerNotas(uid: string) {
    this.firebaseNotas.getAll().subscribe((notasSnapshot) => {
      const nota = notasSnapshot.find((nota) => nota.uid === uid)
      nota.fecha = new Date(nota.fecha.seconds * 1000)
      this.nota = nota
    })
  }

  /* 
  metodo actualizar que va a actualizar en el firebase las notas
  */
  actualizar() {
    if (this.nota) {
      const notaActualizada: Nota = {
        uid: this.nota.uid,
        titulo: this.nota.titulo,
        contenido: this.nota.contenido,
        fecha: this.nota.fecha,
      };
      this.firebaseNotas.update(notaActualizada)
    }
  }
}

