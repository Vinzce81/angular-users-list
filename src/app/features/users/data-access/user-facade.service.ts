import { Injectable, inject } from '@angular/core';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError,
  of,
  tap
} from 'rxjs';

import { UserApiService } from '../../../core/services/user-api.service';
import { UserStoreService } from './user-store.service';

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {

  private api = inject(UserApiService);
  private store = inject(UserStoreService);

  private searchTermSubject = new BehaviorSubject<string>('');

  readonly users$ = this.store.users$;
  readonly loading$ = this.store.loading$;
  readonly error$ = this.store.error$;

  constructor() {

    this.searchTermSubject.pipe(

      debounceTime(300),

      distinctUntilChanged(),

      tap(() => {
        this.store.setLoading(true);
        this.store.setError(null);
      }),

      switchMap(term =>
        this.api.searchUsers(term).pipe(
          catchError(() => {
            this.store.setError('Erreur chargement users');
            return of([]);
          })
        )
      )

    ).subscribe(users => {

      this.store.setUsers(users);
      this.store.setLoading(false);

    });

  }

  search(term: string) {
    this.searchTermSubject.next(term);
  }

  loadInitialUsers() {
    this.search('');
  }

}
