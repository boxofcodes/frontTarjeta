import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private http: HttpClient) {

  }

  getTarjetas() {
    return this.http
      .get('http://api.boxofcodes.com/tarjeta')
      .toPromise();
  }
  getTransacciones() {
    return this.http
      .get('http://api.boxofcodes.com/transaccion')
      .toPromise();
  }
  saveTransacciones(transaccion) {
    return this.http
      .post('http://api.boxofcodes.com/transaccion', transaccion)
      .toPromise();
  }

}
