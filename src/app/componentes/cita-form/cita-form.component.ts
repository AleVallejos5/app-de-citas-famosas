import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IonInput, IonCardTitle, IonCardHeader, IonCard, IonItem, IonButton, IonNote } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cita-form',
  templateUrl: './cita-form.component.html',
  styleUrls: ['./cita-form.component.scss'],
  imports: [IonNote, IonButton, IonItem, IonButton, IonInput, IonCardTitle, IonCardHeader, IonCard, FormsModule],
  standalone: true,
})
export class CitaFormComponent  implements OnInit {
  textoStr: string = "";
  autorStr: string = "";

  @Output() onCreate = new EventEmitter<{ texto: string; autor: string }>()

  constructor() { }

  ngOnInit() {}

  onClick() {
    console.log("producto::onClick")
    this.onCreate.emit({ texto: this.textoStr, autor: this.autorStr });
    this.textoStr = '';
    this.autorStr = '';
  }

}
