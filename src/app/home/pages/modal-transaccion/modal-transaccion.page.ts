import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiRequestService } from '../../service/api-request.service';

@Component({
  selector: 'app-modal-transaccion',
  templateUrl: './modal-transaccion.page.html',
  styleUrls: ['./modal-transaccion.page.scss'],
})
export class ModalTransaccionPage implements OnInit {

  transacciones: any = ''

  constructor(private modalCtrl: ModalController, private servicio: ApiRequestService) {
    this.getTransacciones()
  }

  ngOnInit() {
  }

  async getTransacciones() {
    this.transacciones = await this.servicio.getTransacciones()
    console.log(typeof this.transacciones.results)
    console.log(this.transacciones);

  }

  volver() {
    this.modalCtrl.dismiss()

  }

}
