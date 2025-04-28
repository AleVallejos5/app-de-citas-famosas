import { Component, OnInit, Input } from '@angular/core';
import { IonGrid, IonCol, IonIcon, IonList, IonRow, IonLabel, IonItem } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { Cita } from 'src/app/modelo/cita';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-cita-list',
  templateUrl: './cita-list.component.html',
  styleUrls: ['./cita-list.component.scss'],
  imports: [IonGrid, IonCol, IonIcon, IonList, IonRow, IonLabel, IonItem, CommonModule],
  standalone: true,
})
export class CitaListComponent  implements OnInit {

  @Input() citas: Cita[] = []

  constructor() { 
    addIcons({trashOutline});
  }

  ngOnInit() {}

}
