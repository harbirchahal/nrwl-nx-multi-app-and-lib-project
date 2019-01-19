import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NxModule } from '@nrwl/nx';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { MaterialModule } from '@myorg/ui/libs';
import { MyOrgAuthModule } from '@myorg/auth';
import { MyOrgProfileModule } from '@myorg/profile';
import { MyOrgHeaderModule } from '@myorg/ui/header';
import { MyOrgProgressModule } from '@myorg/ui/progress';
import { MyOrgMessagesModule } from '@myorg/ui/messages';
import { environment } from '../environments/environment';
import { AppRouterModule } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MyOrgAuthModule,
    MyOrgProfileModule,
    MyOrgHeaderModule,
    MyOrgProgressModule,
    MyOrgMessagesModule,
    MaterialModule,
    AppRouterModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      {},
      { metaReducers: !environment.production ? [storeFreeze] : [] }
    ),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    MyOrgAuthModule.forRole('client');
  }

}
