import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private http = inject(HttpClient);

  searchUsers(term: string) {

    const url = term
      ? `https://dummyjson.com/users/search?q=${term}`
      : `https://dummyjson.com/users`;

    return this.http.get<any>(url).pipe(
      map(res =>
        res.users.map((u: any): User => ({
          id: u.id,
          firstName: u.firstName,
          lastName: u.lastName,
          email: u.email,
          role: u.company?.title ?? 'Unknown'
        }))
      )
    );

  }

}
