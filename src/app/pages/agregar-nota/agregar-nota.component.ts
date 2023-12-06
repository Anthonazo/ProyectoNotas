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

	/* 
	Mediante inyeccion de dependencias usamos el servicio creado de firebase
	*/
	constructor(private firebaseNotas: NotasFirebaseService) { }

	/* 
	Metodo save nota que almacena en el firebase mediante el servicio
	ademas usa una notificacion en caso de no ingresar nungun elemento
	*/
	saveNota() {
		if (this.nota.titulo == null) {
			this.mostrarNotificacion('Ingresar el título de la nota');
		}
		else {
			this.nota.fecha = new Date();
			this.firebaseNotas.save(this.nota);
			this.nota = new Nota();
		}

	}


	/* 
	Notificacion que se va a mostrar, diseñado para el saveNota
	*/
	mostrarNotificacion(mensaje: string) {
		if ('Notification' in window) {
		  Notification.requestPermission().then((permission) => {
			if (permission === 'granted') {
			  new Notification('Notificación de la aplicación', {
				body: mensaje,
			  });
			}
		  });
		}
	  }
}
