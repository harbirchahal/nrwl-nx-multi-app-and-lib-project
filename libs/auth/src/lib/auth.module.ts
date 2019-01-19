import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@myorg/ui/libs';
import { AuthService, AuthGuard, AuthTokenService, AuthInterceptor } from './+services';
import { AuthFacade } from './+state';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  providers: [
    AuthService,
    AuthTokenService,
    AuthGuard,
    AuthFacade,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class MyOrgAuthModule {

  static forRole(role: string) {
    AuthFacade.appRole = role;
  }

}
