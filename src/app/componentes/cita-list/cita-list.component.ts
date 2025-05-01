import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IonGrid, IonCol, IonIcon, IonList, IonRow, IonLabel, IonButton } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { Cita } from 'src/app/modelo/cita';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-cita-list',
  templateUrl: './cita-list.component.html',
  styleUrls: ['./cita-list.component.scss'],
  imports: [IonButton, IonGrid, IonCol, IonIcon, IonList, IonRow, IonLabel, CommonModule],
  standalone: true,
})
export class CitaListComponent  implements OnInit {

  @Input() citas: Cita[] = [];
  @Output() onDelete = new EventEmitter<Cita>();

  trackById(index: number, c: Cita): number{
    return c.id!; // Para asegurar que el ID no sea undefined
  }

  constructor() { 
    addIcons({trashOutline});
  }

  ngOnInit() {}

}
