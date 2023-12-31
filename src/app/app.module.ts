import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotasComponent } from './pages/notas/notas.component';
import { AgregarNotaComponent } from './pages/agregar-nota/agregar-nota.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environmets/environment';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { VistaNotaComponent } from './pages/vista-nota/vista-nota.component';
import { SidebarModule } from './layouts/sidebar/sidebar.module';
import { EditarNotaComponent } from './pages/editar-nota/editar-nota.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
	declarations: [
		AppComponent,
		NotasComponent,
		AgregarNotaComponent,
		VistaNotaComponent,
		EditarNotaComponent,
	],
	imports: [
		provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
		provideFirestore(() => getFirestore()),
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		SidebarModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: !isDevMode(),
			// Register the ServiceWorker as soon as the application is stable
			// or after 30 seconds (whichever comes first).
			registrationStrategy: 'registerWhenStable:30000'
		}),
	],
	providers: [
		{ provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
	],
	bootstrap: [AppComponent],
})
export class AppModule { }
