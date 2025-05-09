import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para usar *ngFor
import { FormsModule } from '@angular/forms';  // Necesario si estás usando ngModel en algún campo

@Component({
  selector: 'app-product-list',
  standalone: true,  // Declaración de componente standalone
  imports: [CommonModule, FormsModule],  // Importar CommonModule para *ngFor y FormsModule para ngModel
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  // Definir una lista de productos para el ejemplo
  productos = [
    { id: 1, nombre: 'Producto A', descripcion: 'Descripción A', precio: 20.5, categoria: 'A', unidades: 10, estado: 'A', fechaCreacion: '2022-01-01' },
    { id: 2, nombre: 'Producto B', descripcion: 'Descripción B', precio: 30.0, categoria: 'B', unidades: 5, estado: 'A', fechaCreacion: '2022-02-01' },
    // Agrega más productos aquí si es necesario
  ];

  // Método para editar un producto
  editarProducto(producto: any) {
    console.log('Editar producto', producto);
    // Aquí puedes agregar la lógica para editar el producto
  }

  // Método para eliminar un producto
  eliminarProducto(productId: number) {
    console.log('Eliminar producto con ID:', productId);
    // Aquí puedes agregar la lógica para eliminar el producto
  }
}
