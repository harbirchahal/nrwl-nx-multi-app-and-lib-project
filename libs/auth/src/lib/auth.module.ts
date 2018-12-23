import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@myorg/ui/libs';
import { AuthService, AuthGuard, AuthTokenService } from './+services';
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
    AuthFacade
  ]
})
export class MyOrgAuthModule { }
