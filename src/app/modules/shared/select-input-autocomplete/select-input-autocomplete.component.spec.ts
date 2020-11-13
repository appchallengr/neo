import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInputAutocompleteComponent } from './select-input-autocomplete.component';

describe('SelectInputAutocompleteComponent', () => {
  let component: SelectInputAutocompleteComponent;
  let fixture: ComponentFixture<SelectInputAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectInputAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectInputAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
