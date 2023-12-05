import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarNotaComponent } from './pages/agregar-nota/agregar-nota.component';
import { NotasComponent } from './pages/notas/notas.component';
import { VistaNotaComponent } from './pages/vista-nota/vista-nota.component';
import { EditarNotaComponent } from './pages/editar-nota/editar-nota.component';

const routes: Routes = [
	{ path: 'notas', component: NotasComponent },
	{ path: 'notas/nueva', component: AgregarNotaComponent },
	{ path: 'notas/:uid', component: VistaNotaComponent },
	{ path: '', component: NotasComponent },
	{ path: 'editar/:uid', component: EditarNotaComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
