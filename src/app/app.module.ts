import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MaterialModuleBundle } from './shared/material-bundle.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingModule } from './shared/loading/loading.module';
import { CustomComponentsModule } from './shared/custom/custom-bundle.module';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    StoreModule.forRoot(appReducers),
    environment.production ? [] : StoreDevtoolsModule.instrument({
      maxAge: 30
    }),
    EffectsModule.forRoot(appEffects),
    BrowserAnimationsModule,
    MaterialModuleBundle,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      extendedTimeOut: 1000,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      closeButton: true,
      enableHtml: true,
      progressBar: true,
      newestOnTop: true,
      iconClasses : {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning'
      }
    }),
    LoadingModule,
    CustomComponentsModule,
    AppRoutingModule
  ],

  providers: [],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
