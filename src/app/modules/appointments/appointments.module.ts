import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { AppointmentsComponent } from './appointments.component';
import { CreateAppointmentsComponent } from './create-appointments/create-appointments.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsAppointmentsComponent } from './details-appointments/details-appointments.component';
import { LeaderAppointmentsComponent } from './leader-appointments/leader-appointments.component';
import { AppointmentsService } from 'src/app/core/services/appointments.service';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppointmentsComponent, 
    CreateAppointmentsComponent, 
    DetailsAppointmentsComponent, LeaderAppointmentsComponent
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    SharedModule,
    AppointmentsRoutingModule,
  ],
  providers: [
    AppointmentsService
  ]
})
export class AppointmentsModule { }
