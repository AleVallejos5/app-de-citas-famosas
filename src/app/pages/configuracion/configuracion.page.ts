import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonToggle } from '@ionic/angular/standalone';
import { ConfiguracionService } from 'src/app/servicios/configuracion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonToggle, IonItem, IonList, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ConfiguracionPage implements OnInit {
  permiteBorrado: boolean = true;

  constructor(private configService: ConfiguracionService) { }

  async ngOnInit() {
    this.permiteBorrado = await this.configService.getPermitirBorrado();
  }

  async togglePermitirBorrado() {
    await this.configService.setPermitirBorrado(this.permiteBorrado);
  }

}
