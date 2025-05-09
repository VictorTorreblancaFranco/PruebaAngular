import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importar FormsModule

@Component({
  selector: 'app-product-form',
  standalone: true,  // Indicamos que este es un componente standalone
  imports: [FormsModule],  // Importamos FormsModule para habilitar ngModel
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  // Inicialización del objeto producto
  producto = {
    id: null,
    nombre: '',
    descripcion: '',
    precio: 0,
    categoria: '',
    unidades: 0,
    estado: 'A', // Valor predeterminado para el estado
    fechaCreacion: ''
  };

  // Método para registrar el producto
  registrarProducto() {
    console.log('Registrando producto:', this.producto);
    // Aquí va la lógica para registrar el producto, como una llamada a un servicio
  }

  // Método para actualizar el producto
  actualizarProducto() {
    console.log('Actualizando producto:', this.producto);
    // Aquí va la lógica para actualizar el producto, como una llamada a un servicio
  }

  // Método para resetear el formulario
  resetFormulario() {
    this.producto = {
      id: null,
      nombre: '',
      descripcion: '',
      precio: 0,
      categoria: '',
      unidades: 0,
      estado: 'A',
      fechaCreacion: ''
    };
  }
}
