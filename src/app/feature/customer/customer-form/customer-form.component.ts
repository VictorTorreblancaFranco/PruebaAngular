import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-customer-form',
	standalone: true,
	imports: [FormsModule, CommonModule, MatIconModule, MatButtonModule],
	templateUrl: './customer-form.component.html',
	styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent {
	// Propiedad para controlar la barra de progreso (0-100)
	progress = 0;

	customer = {
		nombre: '',
		apellido: '',
		numero_documento: '',
		telefono: '',
		direccion: '',
		email: '',
		edad: null as number | null,
		fecha_registro: new Date(),
		estado: true
	};

	onSubmit() {
		if (this.isFormValid()) {
			console.log('Cliente registrado:', this.customer);
			// Aquí iría la lógica para guardar en la base de datos
			this.resetForm();
		}
	}

	isFormValid(): boolean {
		const isValid = (
			!!this.customer.nombre?.trim() &&
			!!this.customer.apellido?.trim() &&
			!!this.customer.numero_documento?.trim() &&
			!!this.customer.telefono?.trim() &&
			!!this.customer.direccion?.trim() &&
			!!this.customer.email?.trim() &&
			this.customer.edad !== null &&
			this.customer.edad >= 0
		);

		// Actualizar progreso al validar
		this.updateProgress();
		return isValid;
	}

	resetForm() {
		this.customer = {
			nombre: '',
			apellido: '',
			numero_documento: '',
			telefono: '',
			direccion: '',
			email: '',
			edad: null,
			fecha_registro: new Date(),
			estado: true
		};
		this.progress = 0;
	}

	// Método para actualizar el progreso basado en campos completados
	private updateProgress(): void {
		const fields = [
			this.customer.nombre,
			this.customer.apellido,
			this.customer.numero_documento,
			this.customer.telefono,
			this.customer.direccion,
			this.customer.email,
			this.customer.edad
		];

		const completedFields = fields.filter(field => {
			if (typeof field === 'number') return field !== null;
			return !!field?.trim();
		}).length;

		this.progress = Math.round((completedFields / fields.length) * 100);
	}

	// Método para manejar cambios en los inputs y actualizar progreso
	onFieldChange(): void {
		this.updateProgress();
	}
}