import { Component } from '@angular/core';

import { FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ApiRequestService } from './service/api-request.service';
import { ModalController } from '@ionic/angular';

import { ModalTarjetasPage } from './pages/modal-tarjetas/modal-tarjetas.page';
import { ModalTransaccionPage } from './pages/modal-transaccion/modal-transaccion.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  fechaActual: Date = new Date();
  fechaMinima: string = new Date().toISOString();
  fechaVencimiento: String = ''
  cliente: String = ''
  tarjetaNumero: String = '0000 0000 0000 0000'
  marcas: any = ''
  marcaElegida: String = ''
  tasaAplicada: number = 0
  importe: number = 0
  total: number = 0

  showCard: Boolean = false;


  createFormGroup() {
    return new FormGroup({
      marca: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required, Validators.minLength(16)]),
      vencimiento: new FormControl('', [Validators.required]),
      cardholder: new FormControl('', [Validators.required, Validators.minLength(5)]),
      monto: new FormControl('', [Validators.required])

    })
  }
  transaccionForm: FormGroup

  constructor(private servicio: ApiRequestService, private modalCtrl: ModalController) {
    this.transaccionForm = this.createFormGroup()
    this.getTarjetas()
  }

  onResetForm() {
    this.transaccionForm.reset();
  }
  async onSaveForm() {
    let objetoAGrabar = this.transaccionForm.value
    objetoAGrabar.tasa = this.tasaAplicada
    objetoAGrabar.total = this.total
    objetoAGrabar.vencimiento = this.fechaVencimiento
    console.log(objetoAGrabar)
    if (this.transaccionForm.valid) {
      this.marcas = await this.servicio.saveTransacciones(objetoAGrabar)
      alert('disparar Toast')
      window.location.reload();
    } else {
      alert('completa bien')
    }

  }


  async getTarjetas() {
    this.marcas = await this.servicio.getTarjetas()
    console.log(typeof this.marcas.results)
    console.log(this.marcas);

  }
  cambioFecha(e) {
    let nuevafecha = e.detail.value
    let arreglo = (nuevafecha.split("-"))
    let dia = arreglo[1]
    let anio = arreglo[0].slice(2, 4)
    this.fechaVencimiento = `${dia}-${anio}`
  }
  cambioNombreApellido(e) {
    this.cliente = e.detail.value
  }
  cambioNumeroTarjeta(e) {
    let texto = e.detail.value
    let texto1 = texto.slice(0, 4)
    let texto2 = texto.slice(4, 8)
    let texto3 = texto.slice(8, 12)
    let texto4 = texto.slice(12, 16)
    let concatenado = texto1 + " " + texto2 + " " + texto3 + " " + texto4
    this.tarjetaNumero = concatenado
  }
  cambioMarcaTarjeta(e) {
    const arreglo = this.marcas.filter(item => item.marca === e.detail.value)
    this.marcaElegida = arreglo[0].descripcion;
    this.tasaAplicada = Number(arreglo[0].tasa);
    this.valorTotal()
  }
  ingresoMonto(e) {
    this.importe = Number(e.detail.value)
    let valorAEvaluar = Number(e.detail.value)
    if (valorAEvaluar < 1000 && valorAEvaluar > 0) {
      this.showCard = true
      this.valorTotal()
    } else {
      this.showCard = false;
      this.cliente = '';
      this.tarjetaNumero = '';
      this.marcaElegida = '';
      this.fechaVencimiento = '';
    }
  }
  valorTotal() {
    console.log(this.importe, typeof this.importe)
    console.log(this.tasaAplicada, typeof this.tasaAplicada)
    this.total = (this.importe + this.importe * this.tasaAplicada / 100)
  }

  async showModalTarjetas() {
    const modal = await this.modalCtrl.create({
      component: ModalTarjetasPage,
    })
    await modal.present()
  }

  async showModalTransacciones() {
    const modal = await this.modalCtrl.create({
      component: ModalTransaccionPage,
    })
    await modal.present()

  }



}
