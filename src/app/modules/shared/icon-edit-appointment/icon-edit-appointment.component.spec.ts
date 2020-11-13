import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconEditAppointmentComponent } from './icon-edit-appointment.component';

describe('IconEditAppointmentComponent', () => {
  let component: IconEditAppointmentComponent;
  let fixture: ComponentFixture<IconEditAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconEditAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconEditAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
