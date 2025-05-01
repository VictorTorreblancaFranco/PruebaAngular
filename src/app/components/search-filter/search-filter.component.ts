import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent {
  searchTerm: string = '';
  filterValue: string = '';

  @Output() searchChange = new EventEmitter<string>();
  @Output() filterChange = new EventEmitter<string>();
  @Output() clearAll = new EventEmitter<void>();

  handleSearch(): void {
    this.searchChange.emit(this.searchTerm.trim());
  }

  handleFilter(): void {
    this.filterChange.emit(this.filterValue.trim());
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.searchChange.emit('');
  }

  clearFilters(): void {
    this.filterValue = '';
    this.filterChange.emit('');
  }

  clearAllFilters(): void {
    this.searchTerm = '';
    this.filterValue = '';
    this.clearAll.emit();
    this.searchChange.emit('');
    this.filterChange.emit('');
  }
}