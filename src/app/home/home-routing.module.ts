import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'modal-tarjetas',
    loadChildren: () => import('./pages/modal-tarjetas/modal-tarjetas.module').then(m => m.ModalTarjetasPageModule)
  },
  {
    path: 'modal-transaccion',
    loadChildren: () => import('./pages/modal-transaccion/modal-transaccion.module').then(m => m.ModalTransaccionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
