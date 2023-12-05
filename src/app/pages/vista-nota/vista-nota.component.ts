import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nota } from 'src/app/models/Nota';
import { NotasFirebaseService } from 'src/app/services/notas-firebase.service';

@Component({
	selector: 'app-vista-nota',
	templateUrl: './vista-nota.component.html',
	styleUrls: ['./vista-nota.component.css'],
})
export class VistaNotaComponent {
	notasFirebase: any;
	nota: Nota | null = null;

	constructor(
		private firebaseNotas: NotasFirebaseService,
		private route: ActivatedRoute,
	) {
		const uid = this.route.snapshot.paramMap.get('uid')

		if (uid) {
			this.obtenerNotas(uid)
		}
	}

	obtenerNotas(uid: string) {
		this.firebaseNotas.getAll().subscribe((notasSnapshot) => {
			const nota = notasSnapshot.find((nota) => nota.uid === uid)
			nota.fecha = new Date(nota.fecha.seconds * 1000)
			this.nota = nota
		})
	}


	actualizar(){
		
	}
}
