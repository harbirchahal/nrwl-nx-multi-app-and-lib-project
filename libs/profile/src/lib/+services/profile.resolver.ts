import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, of, empty } from 'rxjs';
import {
  tap,
  map,
  catchError,
  filter,
  switchMap,
  withLatestFrom,
  startWith,
  finalize
} from 'rxjs/operators';
import { MessagesFacade } from '@myorg/ui/messages';
import { ProfileService } from './profile.service';
import { ProfileState, ProfileLoadedAction, profileQuery } from '../+state';
import { HttpErrorResponse } from '@angular/common/http';
import { ProgressFacade } from '@myorg/ui/progress';

@Injectable()
export class ProfileResolver implements Resolve<Observable<boolean>> {
  constructor(
    private store: Store<ProfileState>,
    private service: ProfileService,
    private messagesFacade: MessagesFacade,
    private progressFacade: ProgressFacade
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    return of(true).pipe(
      tap(() => this.progressFacade.start('Loading profile')),
      withLatestFrom(this.store.select(profileQuery.getLoaded)),
      switchMap(([, loadedInStore]) => {
        if (loadedInStore) {
          return of(true);
        }
        return this.service.getProfile().pipe(
          tap(profile => this.store.dispatch(new ProfileLoadedAction(profile))),
          map(() => {
            this.messagesFacade.clear();
            return true;
          }),
          catchError((err: HttpErrorResponse) => {
            console.error('Profile Load Error', err);
            this.messagesFacade.error('Unable to load profile:', err.message);
            return empty();
          })
        );
      }),
      finalize(() => this.progressFacade.end())
    );
  }
}
