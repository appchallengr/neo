import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

import { AppointmentsModule } from './modules/appointments/appointments.module';
import { SharedModule } from './modules/shared/shared.module';
import {MatGridListModule} from '@angular/material/grid-list';

import { NgxMaskModule, IConfig } from 'ngx-mask'
import { ApiService } from './core/services/api.service';
import { AuthService } from './core/services/auth.service';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatGridListModule,
    AppointmentsModule,
    NgxMaskModule.forRoot(),
    SharedModule
  ],
  providers: [
    ApiService,
    AuthService,
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
