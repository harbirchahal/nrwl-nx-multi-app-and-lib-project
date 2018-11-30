import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ProfileState, Entity } from './profile.reducer';
import { profileQuery } from './profile.selectors';
import { LoadProfileAction, SaveProfileAction } from './profile.actions';

@Injectable()
export class ProfileFacade {
  profile$ = this.store.pipe(select(profileQuery.getProfile));

  constructor(private store: Store<ProfileState>) {}

  loadProfile() {
    this.store.dispatch(new LoadProfileAction());
  }

  saveProfile(e: Entity) {
    this.store.dispatch(new SaveProfileAction(e));
  }
}
