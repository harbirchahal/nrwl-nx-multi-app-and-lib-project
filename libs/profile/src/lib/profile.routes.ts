import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ProfileResolver } from './+services';

export const routes: Route[] = [
  {
    path: 'profile',
    component: DetailsComponent,
    resolve: { inStore: ProfileResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRouterModule {}
