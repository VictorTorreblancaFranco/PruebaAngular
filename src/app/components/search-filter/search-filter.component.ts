import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule, MatMenuItem } from '@angular/material/menu';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatMenuItem
  ],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.scss'
})
export class SearchFilterComponent {
  searchTerm = '';
  currentFilter: 'todos' | 'activo' | 'inactivo' = 'todos';

  @Output() searchChange = new EventEmitter<string>();
  @Output() filterChange = new EventEmitter<'todos' | 'activo' | 'inactivo'>();

  handleSearch(): void {
    this.searchChange.emit(this.searchTerm.trim());
  }

  applyFilter(filter: 'todos' | 'activo' | 'inactivo'): void {
    this.currentFilter = filter;
    this.filterChange.emit(filter);
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.searchChange.emit('');
  }
}