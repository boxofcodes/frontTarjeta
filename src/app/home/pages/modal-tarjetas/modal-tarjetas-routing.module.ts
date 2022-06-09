import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalTarjetasPage } from './modal-tarjetas.page';

const routes: Routes = [
  {
    path: '',
    component: ModalTarjetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalTarjetasPageRoutingModule {}
