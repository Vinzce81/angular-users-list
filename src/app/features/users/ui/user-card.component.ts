import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {User} from '../../../core/models/user.model';
import {FullNamePipe} from '../../../shared/pipes/full-name.pipe';
import {HighLightDirective} from '../../../shared/directives/highlight.directive';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, FullNamePipe, HighLightDirective],
  template: `
    <article class="card" appHighlight>
      <h3>{{ user | fullname }}</h3>
      <p>{{ user.email }}</p>
      <p>{{ user.role }}</p>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent {
  @Input({ required: true}) user!: User;
}
