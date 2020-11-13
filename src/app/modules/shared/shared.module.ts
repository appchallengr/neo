import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';
import { BotaoComponent } from './botao/botao.component';
import { IconBackComponent } from './icon-back/icon-back.component';
import { IconEvidenceComponent } from './icon-evidence/icon-evidence.component';
import { IconEditAppointmentComponent } from './icon-edit-appointment/icon-edit-appointment.component';
import { IconDuplicateAppointmentComponent } from './icon-duplicate-appointment/icon-duplicate-appointment.component';
import { IconAttachComponent } from './icon-attach/icon-attach.component';
import { IconDeleteComponent } from './icon-delete/icon-delete.component';
import { NotificationComponent } from './notification/notification.component';
import { BtnBackComponent } from './btn-back/btn-back.component';
import { IconDateComponent } from './icon-date/icon-date.component';
import { SelectInputComponent } from './select-input/select-input.component';
import { DatepickerInputComponent } from './datepicker-input/datepicker-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './text-input/text-input.component';
import { IconHourComponent } from './icon-hour/icon-hour.component';
import { NgxMaskModule } from 'ngx-mask';
import { SelectInputAutocompleteComponent } from './select-input-autocomplete/select-input-autocomplete.component';
import { UploadButtonComponent } from './upload-button/upload-button.component';
import { BtnStatusComponent } from './btn-status/btn-status.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BotaoComponent,
    IconBackComponent,
    IconEvidenceComponent,
    IconEditAppointmentComponent,
    IconDuplicateAppointmentComponent,
    IconAttachComponent,
    IconDeleteComponent,
    NotificationComponent,
    BtnBackComponent,
    IconDateComponent,
    SelectInputComponent,
    DatepickerInputComponent,
    TextInputComponent,
    IconHourComponent,
    SelectInputAutocompleteComponent,
    UploadButtonComponent,
    BtnStatusComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxMaskModule
  ],
  exports: [
    HeaderComponent,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    NgxMaskModule,
    RouterModule,
    BotaoComponent,
    IconBackComponent,
    IconEvidenceComponent,
    IconEditAppointmentComponent,
    IconDuplicateAppointmentComponent,
    IconAttachComponent,
    IconDeleteComponent,
    NotificationComponent,
    BtnBackComponent,
    IconDateComponent,
    DatepickerInputComponent,
    SelectInputComponent,
    TextInputComponent,
    IconHourComponent,
    SelectInputAutocompleteComponent,
    UploadButtonComponent,
    BtnStatusComponent
  ]
})
export class SharedModule { }
