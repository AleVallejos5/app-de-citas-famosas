import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonIcon, IonButton, IonCard, IonCardContent, IonCardTitle, IonCardHeader } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { buildOutline, settingsOutline } from 'ionicons/icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonCardHeader, IonCardTitle, IonCardContent, IonCard, IonButton,
     IonIcon, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, RouterModule],
})
export class HomePage {
  constructor() {
    addIcons({buildOutline});
        settingsOutline
  }
}
