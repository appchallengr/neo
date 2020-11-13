import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderAppointmentsComponent } from './leader-appointments.component';

describe('LeaderAppointmentsComponent', () => {
  let component: LeaderAppointmentsComponent;
  let fixture: ComponentFixture<LeaderAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
