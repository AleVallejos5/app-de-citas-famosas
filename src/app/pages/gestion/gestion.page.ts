import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { OpcionCitasComponent } from 'src/app/componentes/opcion-citas/opcion-citas.component';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, OpcionCitasComponent]
})
export class GestionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
