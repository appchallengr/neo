import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconEvidenceComponent } from './icon-evidence.component';

describe('IconEvidenceComponent', () => {
  let component: IconEvidenceComponent;
  let fixture: ComponentFixture<IconEvidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconEvidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconEvidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
