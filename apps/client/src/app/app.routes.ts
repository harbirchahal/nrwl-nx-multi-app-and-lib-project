import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AUTH_ROUTES, AuthGuard } from '@myorg/auth';
import { PROFILE_ROUTES } from '@myorg/profile';
import { HomeComponent } from './home/home.component';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  ...AUTH_ROUTES,
  {
    path: 'app',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      ...PROFILE_ROUTES
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      enableTracing: false
    })
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
