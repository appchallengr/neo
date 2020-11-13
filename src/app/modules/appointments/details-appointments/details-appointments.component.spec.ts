import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAppointmentsComponent } from './details-appointments.component';

describe('DetailsAppointmentsComponent', () => {
  let component: DetailsAppointmentsComponent;
  let fixture: ComponentFixture<DetailsAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
