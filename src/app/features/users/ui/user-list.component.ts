import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {User} from '../../../core/models/user.model';
import {UserCardComponent} from './user-card.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-user-list',
  template: `
    <ng-container *ngIf="users?.length; else emptyState">
      <div class="list">
        <app-user-card
          *ngFor="let user of users; trackBy: trackByUserId"
          [user]="user">
        </app-user-card>
      </div>
    </ng-container>

    <ng-template #emptyState>
      Aucun utilisateur trouvé.
    </ng-template>
  `,
  imports: [
    UserCardComponent,
    CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  @Input() users: User[] | null = [];

  trackByUserId(index: number, user: User): number {
    return user.id;
  }
}

