import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user-filter',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input
      type="text"
      [(ngModel)]="search"
      (ngModelChange)="searchChanged.emit($event)"
      placeholder="Rechercher un utilisateur" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFilterComponent {
  @Output() searchChanged = new EventEmitter<string>();

  search='';
}
