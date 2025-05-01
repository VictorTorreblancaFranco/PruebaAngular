import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button-bar',
  standalone: true,
  imports: [MatIconModule], // Añade esto
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.scss']
})
export class ButtonBarComponent {
  @Output() onFilter = new EventEmitter<void>();
  @Output() onSearch = new EventEmitter<void>();
  @Output() onReset = new EventEmitter<void>();

  filter() { this.onFilter.emit(); }
  search() { this.onSearch.emit(); }
  reset() { this.onReset.emit(); }
}