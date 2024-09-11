import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  constructor(private alertController: AlertController) {}

  onSearch(event: any) {
    const value = event.target.value;
    console.log('Valor de búsqueda:', value);
    // Aquí puedes agregar la lógica para filtrar o buscar datos
  }
  
}
