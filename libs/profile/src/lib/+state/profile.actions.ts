import { RouterAction } from '@ngrx/router-store';
import { Action } from '@ngrx/store';
import { Profile } from '@myorg/data-models';

interface ActionWithPayload extends Action {
  payload: any;
}

export enum ProfileActionTypes {
  Load = '[Profile] Load',
  LoadSuccess = '[Profile] Load Success',

  Save = '[Profile] Save',
  SaveSuccess = '[Profile] Save Success'
}

export class LoadProfileAction implements Action {
  readonly type = ProfileActionTypes.Load;
}

export class ProfileLoadedAction implements ActionWithPayload {
  readonly type = ProfileActionTypes.LoadSuccess;

  constructor(public payload: Profile) {}
}

export class SaveProfileAction implements ActionWithPayload {
  readonly type = ProfileActionTypes.Save;

  constructor(public payload: Profile) {}
}

export class ProfileSavedAction implements ActionWithPayload {
  readonly type = ProfileActionTypes.SaveSuccess;

  constructor(public payload: Profile) {}
}

export type ProfileAction =
  | RouterAction<Profile>
  | LoadProfileAction
  | ProfileLoadedAction
  | SaveProfileAction
  | ProfileSavedAction;
