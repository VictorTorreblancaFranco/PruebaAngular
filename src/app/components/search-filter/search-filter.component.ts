import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule
  ],
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent {
  searchTerm = '';
  filterValue: 'todos' | 'activo' | 'inactivo' = 'todos';

  @Output() searchChange = new EventEmitter<string>();
  @Output() filterChange = new EventEmitter<string>();
  @Output() clearAll = new EventEmitter<void>();

  // Función para mostrar el texto del filtro actual
  getFilterText(): string {
    switch(this.filterValue) {
      case 'activo': return 'Activos';
      case 'inactivo': return 'Inactivos';
      default: return 'Filtrar';
    }
  }

  handleSearch(): void {
    this.searchChange.emit(this.searchTerm.trim());
  }

  applyFilter(value: 'todos' | 'activo' | 'inactivo'): void {
    this.filterValue = value;
    this.filterChange.emit(value);
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.searchChange.emit('');
  }

  clearAllFilters(): void {
    this.searchTerm = '';
    this.filterValue = 'todos';
    this.clearAll.emit();
    this.searchChange.emit('');
    this.filterChange.emit('todos');
  }
}