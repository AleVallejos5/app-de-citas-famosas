import { Component, OnInit } from '@angular/core';
import { CitaListComponent } from '../cita-list/cita-list.component'; // clase hijo
import { CitaFormComponent } from '../cita-form/cita-form.component';   // clase hijo
import { CitasService } from 'src/app/servicios/citas.service';
import { Cita } from 'src/app/modelo/cita';
import { CommonModule } from '@angular/common';
import { IonContent, IonSpinner } from "@ionic/angular/standalone";

@Component({
  selector: 'app-opcion-citas',
  templateUrl: './opcion-citas.component.html',
  styleUrls: ['./opcion-citas.component.scss'],
  standalone: true,
  imports: [IonSpinner, IonContent, CitaListComponent, CitaFormComponent, CommonModule]
})

export class OpcionCitasComponent  implements OnInit {
  listaCitas: Cita[] = [];
  cargando: boolean = true;

  constructor(
    private citasService:CitasService  
  ) {}

  async ngOnInit() { 
    await this._actualizar() 
  }

  private async _actualizar() {
    try {
      this.cargando = true;
      this.listaCitas = await this.citasService.getCitas(); // <-- Ahora es async
    } catch (error) {
      console.error('Error al cargar citas:', error);
    } finally {
      this.cargando = false;
    }
  }
    
  async onCreateCita(event: { texto: string; autor: string }) {
    const nuevaCita = new Cita(event.texto, event.autor);
    await this.citasService.agregarCita(nuevaCita);
    await this._actualizar();
  }

  async onDeleteCita(cita: Cita) { // <-- Nuevo método para eliminar
    if (cita.id) {
      await this.citasService.eliminarCita(cita.id);
      await this._actualizar();
    }
  }

}