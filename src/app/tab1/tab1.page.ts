import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  searchVisible: boolean = false; // Controla la visibilidad del campo de búsqueda
  searchQuery: string = '';       // Almacena el valor de búsqueda

  constructor(private alertController: AlertController) {}

  // Alterna la visibilidad del campo de búsqueda
  toggleSearch() {
    this.searchVisible = !this.searchVisible;
  }

  // Maneja los cambios en el campo de búsqueda
  onSearchChange(event: any) {
    const value = event.detail.value;  // Obtén el valor del campo de búsqueda
    console.log('Valor de búsqueda:', value);
    // Aquí puedes agregar la lógica para filtrar o buscar datos
  }
}
