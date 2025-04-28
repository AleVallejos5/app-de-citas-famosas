import { Injectable } from '@angular/core';
import { Cita } from '../modelo/cita';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private _citas: Cita[] = [
    new Cita("", "")
  ]

  constructor() {}

  getCitas(): Cita[] { 
    return this._citas
  } 
  
  agregarCita(c:Cita) { 
    this._citas.push(c);
  }

}
