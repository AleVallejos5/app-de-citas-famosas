import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonIcon, IonButton, IonCard, IonCardContent, IonFab } from '@ionic/angular/standalone';
import { buildOutline, refreshOutline, settingsOutline, trashOutline, add } from 'ionicons/icons';
import { Router, RouterModule } from '@angular/router';
import { Cita } from 'src/app/modelo/cita';
import { CitasService } from 'src/app/servicios/citas.service';
import { addIcons } from 'ionicons';
import { ConfiguracionService } from 'src/app/servicios/configuracion.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonFab, IonCardContent, IonCard, IonButton,
     IonIcon, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, RouterModule],
})
export class HomePage implements OnInit {
  citaAleatoria: Cita | null = null;
  mostrarBotonEliminar: boolean = true; // controlar la visivilidad del boton

  constructor(
    private citasService: CitasService,
    private router: Router,
    private configService: ConfiguracionService
  ) {

    addIcons({settingsOutline,trashOutline,add,buildOutline,refreshOutline});
  }

  async ngOnInit() {
    await this.cargarConfiguracion();
    await this.cargarCitaAleatoria();
  }

  private async cargarConfiguracion() {
    this.mostrarBotonEliminar = await this.configService.getPermitirBorrado();
  }

  private async cargarCitaAleatoria() {
    this.citaAleatoria = await this.citasService.getRandomCita();
  }

  async eliminarCita() {
    if (this.citaAleatoria?.id) {
      await this.citasService.eliminarCita(this.citaAleatoria.id);
      await this.cargarCitaAleatoria();
    }
  }
}