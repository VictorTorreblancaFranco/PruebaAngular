import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button-bar',
  standalone: true,
  imports: [
    MatIconModule,
    FormsModule,
    MatTooltipModule,
    MatButtonModule
  ],
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.scss']
})
export class ButtonBarComponent {
  @Output() onFilter = new EventEmitter<void>();
  @Output() onSearch = new EventEmitter<string>();
  @Output() onClear = new EventEmitter<void>();

  searchTerm: string = '';

  // Emite el evento de búsqueda cuando cambia el término
  onSearchChange() {
    this.onSearch.emit(this.searchTerm);
  }

  // Emite el evento de filtro
  filter() {
    this.onFilter.emit();
  }

  // Limpia la búsqueda y emite el evento
  clearSearch() {
    this.searchTerm = '';
    this.onClear.emit();
    this.onSearch.emit(''); // Asegura que se notifique el cambio
  }
}