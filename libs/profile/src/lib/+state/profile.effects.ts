import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import {
  ProfileActionTypes,
  LoadProfileAction,
  ProfileLoadedAction,
  SaveProfileAction,
  ProfileSavedAction
} from './profile.actions';
import { ProfileState } from './profile.reducer';
import { ProfileService } from '../+services/profile.service';

@Injectable()
export class ProfileEffects {
  @Effect() loadProfile$ = this.dataPersistence.fetch(ProfileActionTypes.Load, {
    run: (action: LoadProfileAction, state: ProfileState) => {
      return this.service
        .getProfile()
        .pipe(map(data => new ProfileLoadedAction(data)));
    },

    onError: (action: LoadProfileAction, error) => {
      console.error('Profile Load Error', error);
      return null;
    }
  });

  @Effect() saveProfile$ = this.dataPersistence.pessimisticUpdate(
    ProfileActionTypes.Save,
    {
      run: (action: SaveProfileAction, state: ProfileState) => {
        return this.service
          .postProfile(action.payload)
          .pipe(map(data => new ProfileSavedAction(data)));
      },

      onError: (action: SaveProfileAction, error) => {
        console.error('Profile Save Error', error);
        return null;
      }
    }
  );

  constructor(
    private actions$: Actions,
    private service: ProfileService,
    private store: Store<ProfileState>,
    private dataPersistence: DataPersistence<ProfileState>
  ) {}
}
