import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {
  private permitirBorrarInicio = true;

  getPermitirBorrarInicio(): boolean {
    return this.permitirBorrarInicio;
  }

  setPermitirBorrarInicio(valor: boolean): void {
    this.permitirBorrarInicio = valor;
  }

  constructor() { }
}
