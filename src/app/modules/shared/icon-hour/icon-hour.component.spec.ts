import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconHourComponent } from './icon-hour.component';

describe('IconHourComponent', () => {
  let component: IconHourComponent;
  let fixture: ComponentFixture<IconHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconHourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
