import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiRequestService } from '../../service/api-request.service';

@Component({
  selector: 'app-modal-tarjetas',
  templateUrl: './modal-tarjetas.page.html',
  styleUrls: ['./modal-tarjetas.page.scss'],
})
export class ModalTarjetasPage implements OnInit {

  marcas: any = ''

  constructor(private modalCtrl: ModalController, private servicio: ApiRequestService) {
    this.getTarjetas()
  }
  async getTarjetas() {
    this.marcas = await this.servicio.getTarjetas()
    console.log(typeof this.marcas.results)
    console.log(this.marcas);

  }

  ngOnInit() {
  }

  volver() {
    this.modalCtrl.dismiss()

  }

}
