import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Nota } from 'src/app/models/Nota';
import { NotasFirebaseService } from 'src/app/services/notas-firebase.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

	notasFirebase: any;
	notas: Nota[] = [];

	constructor(
		private firebaseNotas: NotasFirebaseService,
		private router: Router,
	) {}

	ngOnInit(): void {
		this.obtenerNotas()
	}

	obtenerNotas() {
		this.firebaseNotas.getAll().subscribe(notasSnapshot => {
			this.notas = notasSnapshot.map((nota: any) => ({
			  ...nota,fecha: nota.fecha.toDate() // Convierte el Timestamp a Date
			}));
		  })
	}

	eliminarNotas(nota: Nota){
		const n = this.notas.indexOf(nota)
		this.firebaseNotas.delete(nota)
		this.notas = [];
		this.obtenerNotas();
	}

	actualizarNotas(nota: Nota){
		this.router.navigate(['/editar', nota.uid]);
	}
}
