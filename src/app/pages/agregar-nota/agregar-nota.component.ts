import { Component } from '@angular/core';
import { Nota } from 'src/app/models/Nota';
import { NotasFirebaseService } from 'src/app/services/notas-firebase.service';

@Component({
	selector: 'app-agregar-nota',
	templateUrl: './agregar-nota.component.html',
	styleUrls: ['./agregar-nota.component.css'],
})
export class AgregarNotaComponent {
	requerido = true;
	notasFirebase: any;
	nota = new Nota();

	constructor(private firebaseNotas: NotasFirebaseService) { }

	saveNota() {
		if (this.nota.titulo == null) {
			alert('Ingresar el titulo de la nota')
		}
		else {
			this.nota.fecha = new Date();
			this.firebaseNotas.save(this.nota);
			this.nota = new Nota();
		}

	}
}
