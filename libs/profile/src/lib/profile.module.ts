import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '@myorg/ui/libs';
import { DetailsComponent } from './details/details.component';
import {
  RouterEffects,
  ProfileEffects,
  ProfileFacade,
  PROFILE_FEATURE_KEY,
  initialState,
  profileReducer
} from './+state';
import { ProfileService, ProfileResolver } from './+services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forFeature(PROFILE_FEATURE_KEY, profileReducer, {
      initialState
    }),
    EffectsModule.forFeature([ProfileEffects, RouterEffects])
  ],
  declarations: [DetailsComponent],
  providers: [ProfileFacade, ProfileService, ProfileResolver],
  exports: []
})
export class MyOrgProfileModule {}
