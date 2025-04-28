import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonIcon, IonButton, IonCard, IonCardContent, IonCardTitle, IonCardHeader } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { buildOutline, refreshOutline, settingsOutline, trashOutline } from 'ionicons/icons';
import { Router, RouterModule } from '@angular/router';
import { Cita } from 'src/app/modelo/cita';
import { CitasService } from 'src/app/servicios/citas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonCardHeader, IonCardTitle, IonCardContent, IonCard, IonButton,
     IonIcon, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, RouterModule],
})
export class HomePage {
  citaAleatoria: Cita;
  mostrarBotonEliminar: boolean = true; // controlar la visivilidad del boton

  constructor(
    private citasService: CitasService,
    private router: Router
  ) {
    addIcons({ buildOutline, settingsOutline, refreshOutline, trashOutline});
    this.citaAleatoria = this.citasService.getRandomCita();
  }

  // actualizar la cita aleatoria
  refrescarCita() {
    this.citaAleatoria = this.citasService.getRandomCita();
  }

  // elimibnar la cita actual
  eliminarCita() {
    if (this.citaAleatoria.id){
      this.citasService.eliminarCita(this.citaAleatoria.id);
      this.refrescarCita();
    }
  }

  // navegacion
  irAGestion() {
    this.router.navigate(['/gestion']);
  }

  irAConfiguracion(){
    this.router.navigate(['/configuracion']);
  }

}