import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para *ngFor y otras directivas comunes
import { ProductFormComponent } from '../../feature/product/product-form/product-form.component'; // Importar el componente standalone
import { ProductListComponent } from '../../feature/product/product-list/product-list.component';
import { SidebarComponent } from "../../layout/sidebar/sidebar/sidebar.component"; // Importar el componente standalone

@Component({
  selector: 'app-page-product',
  standalone: true,  // Especificar que este componente es standalone
  imports: [CommonModule, ProductFormComponent, ProductListComponent, SidebarComponent],  // Importar CommonModule y los componentes
  templateUrl: './page-product.component.html',
  styleUrls: ['./page-product.component.scss']
})
export class PageProductComponent {
  // Lógica del componente
}
