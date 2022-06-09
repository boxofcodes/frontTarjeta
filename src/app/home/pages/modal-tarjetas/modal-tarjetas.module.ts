import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalTarjetasPageRoutingModule } from './modal-tarjetas-routing.module';

import { ModalTarjetasPage } from './modal-tarjetas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalTarjetasPageRoutingModule
  ],
  declarations: [ModalTarjetasPage]
})
export class ModalTarjetasPageModule {}
