import {Pipe, PipeTransform} from '@angular/core';
import {User} from '../../core/models/user.model';

@Pipe({
  name: 'fullname',
  standalone: true
})
export class FullNamePipe implements PipeTransform{
  transform(user : User): string {
    return `${user.firstName} ${user.lastName}`;
  }
}
