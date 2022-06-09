import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalTransaccionPage } from './modal-transaccion.page';

const routes: Routes = [
  {
    path: '',
    component: ModalTransaccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalTransaccionPageRoutingModule {}
