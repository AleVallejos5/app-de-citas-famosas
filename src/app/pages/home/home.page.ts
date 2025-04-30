import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonIcon, IonButton, IonCard, IonCardContent} from '@ionic/angular/standalone';
import { buildOutline, refreshOutline, settingsOutline, trashOutline } from 'ionicons/icons';
import { Router, RouterModule } from '@angular/router';
import { Cita } from 'src/app/modelo/cita';
import { CitasService } from 'src/app/servicios/citas.service';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCard, IonButton,
     IonIcon, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, RouterModule],
})
export class HomePage {
  citaAleatoria: Cita;
  mostrarBotonEliminar: boolean = true; // controlar la visivilidad del boton

  constructor(
    private citasService: CitasService,
    private router: Router
  ) {

    addIcons({ buildOutline, settingsOutline, refreshOutline, trashOutline});

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