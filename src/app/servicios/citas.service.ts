import { Injectable } from '@angular/core';
import { Cita } from '../modelo/cita';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private _citas: Cita[] = [
    new Cita("La vida es lo que pasa mientras diseñas otros planes", "John Lennon", 1),
    new Cita("Sé el cambio que quieres ver en el mundo", "Mahatma Gandhi", 2)
  ];

  constructor() {}

  // obtener cita aleatoria
  getRandomCita(): Cita {
    return this._citas[Math.floor(Math.random() * this._citas.length)];
  }

  // Obtener todas las citas (usado en gestión)
  getCitas(): Cita[] { 
    return [...this._citas]; // retorna copia para evitar mutaciones
  } 
  
  // Agregar nueva cita (con ID autoincremental)
  agregarCita(cita: Cita): void { 
    const newId = this._citas.length > 0 ? Math.max(...this._citas.map(c => c.id || 0)) + 1 : 1;
    this._citas.push(new Cita(cita.texto, cita.autor, newId));
  }

  // eliminar cita por ID
  eliminarCita(id: number): void {
    this._citas = this._citas.filter(c => c.id !== id);
  }
}
