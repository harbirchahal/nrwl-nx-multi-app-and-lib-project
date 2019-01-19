import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AUTH_ROUTES, AuthGuard } from '@myorg/auth';
import { PROFILE_ROUTES } from '@myorg/profile';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
      {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full'
      },
      ...PROFILE_ROUTES
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
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
