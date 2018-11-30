import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { RouterNavigationAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { map, filter, switchMap, withLatestFrom, tap } from 'rxjs/operators';
import { ProfileState } from './profile.reducer';
import { LoadProfileAction } from './profile.actions';
import { profileQuery } from './profile.selectors';

@Injectable()
export class RouterEffects {
  /**
   * Replaced this behavior with Data Resolver
   */
  // @Effect() navigateToProfile$ = this.actions$.ofType(ROUTER_NAVIGATION).pipe(
  //   filter((action: RouterNavigationAction) => action.payload.routerState.url === '/profile'),
  //   withLatestFrom(this.store.select(profileQuery.getLoaded)),
  //   filter(([action, loaded]) => !loaded),
  //   map(() => new LoadProfileAction())
  // );

  constructor(private actions$: Actions, private store: Store<ProfileState>) {}
}
