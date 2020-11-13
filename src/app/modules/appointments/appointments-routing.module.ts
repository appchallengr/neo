import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentsComponent } from './appointments.component';
import { CreateAppointmentsComponent } from './create-appointments/create-appointments.component';
import { DetailsAppointmentsComponent } from './details-appointments/details-appointments.component';
import { LeaderAppointmentsComponent } from './leader-appointments/leader-appointments.component';

const routes: Routes = [
  { path: '', component: AppointmentsComponent },
  { path: 'lider', component: LeaderAppointmentsComponent },
  { path: 'novo', component: CreateAppointmentsComponent },
  { path: 'detalhes/:id', component: DetailsAppointmentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
