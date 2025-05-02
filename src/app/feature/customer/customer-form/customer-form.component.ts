import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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

    onSubmit(form: NgForm) {
        if (form.valid) {
            console.log('Cliente registrado:', this.customer);
            // Aquí iría la lógica para guardar en la base de datos
            this.resetForm(form);
        } else {
            // Marcar todos los campos como touched para mostrar errores
            Object.keys(form.controls).forEach(key => {
                form.controls[key].markAsTouched();
            });
        }
    }

    resetForm(form?: NgForm) {
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
        form?.resetForm();
    }

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

    onFieldChange(): void {
        this.updateProgress();
    }
}