import { RouterAction } from '@ngrx/router-store';
import { Action } from '@ngrx/store';
import { Entity } from './profile.reducer';

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

  constructor(public payload: Entity) {}
}

export class SaveProfileAction implements ActionWithPayload {
  readonly type = ProfileActionTypes.Save;

  constructor(public payload: Entity) {}
}

export class ProfileSavedAction implements ActionWithPayload {
  readonly type = ProfileActionTypes.SaveSuccess;

  constructor(public payload: Entity) {}
}

export type ProfileAction =
  | RouterAction<Entity>
  | LoadProfileAction
  | ProfileLoadedAction
  | SaveProfileAction
  | ProfileSavedAction;
