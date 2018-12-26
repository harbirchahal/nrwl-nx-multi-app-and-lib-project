import { ProfileAction, ProfileActionTypes } from './profile.actions';
import { Profile } from '@myorg/data-models';

export const PROFILE_FEATURE_KEY = 'Profile';

export interface ProfileState {
  entity: Profile;
  loaded: boolean;
}

export const initialState: ProfileState = {
  entity: {
    firstName: '',
    lastName: ''
  },
  loaded: false
};

export function profileReducer(
  state: ProfileState,
  action: ProfileAction
): ProfileState {
  switch (action.type) {
    case ProfileActionTypes.LoadSuccess: {
      state = {
        ...state,
        entity: action.payload,
        loaded: true
      };
      break;
    }

    case ProfileActionTypes.SaveSuccess: {
      state = {
        ...state,
        entity: action.payload
      };
      break;
    }
  }
  return state;
}
