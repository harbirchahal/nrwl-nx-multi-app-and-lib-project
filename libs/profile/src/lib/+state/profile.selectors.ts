import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PROFILE_FEATURE_KEY, ProfileState } from './profile.reducer';

// Lookup the 'Profile' feature state managed by NgRx
const getProfileState = createFeatureSelector<ProfileState>(
  PROFILE_FEATURE_KEY
);

const getProfile = createSelector(
  getProfileState,
  state => state.entity
);

const getLoaded = createSelector(
  getProfileState,
  state => state.loaded
);

export const profileQuery = {
  getProfile,
  getLoaded
};
