import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IonInput, IonCardTitle, IonCardHeader, IonCard,
   IonItem, IonButton, IonNote } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cita-form',
  templateUrl: './cita-form.component.html',
  styleUrls: ['./cita-form.component.scss'],
  imports: [IonNote, IonButton, IonItem, IonButton, IonInput,
     IonCardTitle, IonCardHeader, IonCard, FormsModule, CommonModule],
  standalone: true,
})
export class CitaFormComponent  implements OnInit {
  textoStr: string = "";
  autorStr: string = "";

  @Output() onCreate = new EventEmitter<{ texto: string; autor: string }>();

  constructor() { }

  ngOnInit() {}

  onClick() {
    if (this.textoStr && this.autorStr) {
      this.onCreate.emit({
        texto: this.textoStr.trim(),
        autor: this.autorStr.trim()
      });
      this.textoStr = '';
      this.autorStr = '';
    }
  }
}
