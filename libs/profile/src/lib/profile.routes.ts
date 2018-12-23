import { Route } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ProfileResolver } from './+services';

export const PROFILE_ROUTES: Route[] = [
  {
    path: 'profile',
    component: DetailsComponent,
    resolve: { inStore: ProfileResolver }
  }
];
