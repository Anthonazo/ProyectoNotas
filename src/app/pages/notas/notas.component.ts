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

	/* 
	Creamos un obtener notas que se ejecutara cuando carguemos la pagina
	*/
	ngOnInit(): void {
		this.obtenerNotas()
	}

	/* 
	Metodo que obtiene las notas del firebase y los almacena localmente 
	*/

	obtenerNotas() {
		this.firebaseNotas.getAll().subscribe(notasSnapshot => {
			this.notas = notasSnapshot.map((nota: any) => ({
			  ...nota,fecha: nota.fecha.toDate() // Convierte el Timestamp a Date
			}));
		  })
	}

	/* 
	Elimina las notas mediante el index de esta de manera local y se comunicara con el firebase
	*/
	eliminarNotas(nota: Nota){
		const n = this.notas.indexOf(nota)
		this.firebaseNotas.delete(nota)
		this.notas = [];
		this.obtenerNotas();
	}

	/* 
	metodo que nos va a redirigir a la pestaña donde se puede editar la nota
	*/
	actualizarNotas(nota: Nota){
		this.router.navigate(['/editar', nota.uid]);
	}
}
