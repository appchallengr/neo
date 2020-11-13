import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDuplicateAppointmentComponent } from './icon-duplicate-appointment.component';

describe('IconDuplicateAppointmentComponent', () => {
  let component: IconDuplicateAppointmentComponent;
  let fixture: ComponentFixture<IconDuplicateAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconDuplicateAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDuplicateAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
