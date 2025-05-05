import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {
  private readonly KEY_PERMITIR_BORRADO = 'permitirBorrado';

  async getPermitirBorrado(): Promise<boolean> {
    const {value} = await Preferences.get({ key: this.KEY_PERMITIR_BORRADO});
    return value === 'true';
  }

  async setPermitirBorrado(permitir: boolean): Promise<void> {
    await Preferences.set({
      key: this.KEY_PERMITIR_BORRADO,
      value: String(permitir)
    });
  }

  constructor() { }
}
