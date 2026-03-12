import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFacadeService } from '../data-access/user-facade.service';
import { UserListComponent } from '../ui/user-list.component';
import { UserFilterComponent } from '../ui/user-filter.component';

@Component({
  standalone: true,
  selector: 'app-user-page',
  imports: [CommonModule, UserListComponent, UserFilterComponent],
  template: `

    <h1>Users</h1>

    <app-user-filter
      (searchChanged)="onSearch($event)">
    </app-user-filter>

    <p *ngIf="facade.loading$ | async">Loading...</p>

    <app-user-list
      [users]="facade.users$ | async">
    </app-user-list>

  `
})
export class UserPageComponent implements OnInit {

  facade = inject(UserFacadeService);

  ngOnInit() {
    this.facade.loadInitialUsers();
  }

  onSearch(term: string) {
    this.facade.search(term);
  }

}
