import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAttachComponent } from './icon-attach.component';

describe('IconAttachComponent', () => {
  let component: IconAttachComponent;
  let fixture: ComponentFixture<IconAttachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconAttachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconAttachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
