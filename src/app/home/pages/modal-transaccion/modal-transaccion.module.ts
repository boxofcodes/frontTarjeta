import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalTransaccionPageRoutingModule } from './modal-transaccion-routing.module';

import { ModalTransaccionPage } from './modal-transaccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalTransaccionPageRoutingModule
  ],
  declarations: [ModalTransaccionPage]
})
export class ModalTransaccionPageModule {}
