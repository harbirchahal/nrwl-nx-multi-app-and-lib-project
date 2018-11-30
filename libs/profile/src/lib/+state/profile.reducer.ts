import { ProfileAction, ProfileActionTypes } from './profile.actions';

export const PROFILE_FEATURE_KEY = 'Profile';

export interface Entity {
  firstName: string;
  lastName: string;
}

export interface ProfileState {
  entity: Entity;
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
