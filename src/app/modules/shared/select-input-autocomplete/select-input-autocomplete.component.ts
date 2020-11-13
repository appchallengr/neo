import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectInputAutocompleteComponent),
  multi: true
}


@Component({
  selector: 'app-select-input-autocomplete',
  templateUrl: './select-input-autocomplete.component.html',
  styleUrls: ['./select-input-autocomplete.component.css'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR]
})
export class SelectInputAutocompleteComponent implements OnInit {

  @Input() items:any[];
  @Input() placeholder:string;
  @Input() title:string;
  @Input() required: boolean;

  private innerValue: any = '';
  @Input() isReadOnly = false;
  @Output() changeValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  get value() {
    return this.innerValue;
  }

  set value(v: string) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCb(v);
      this.changeValue.emit();
    }
  }

  onBlur() {
    this.onTouchedCb;
  }

  writeValue(value: any): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  egisterOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }

  onChangeCb: (_: any) => void = () => { };
  onTouchedCb: (_: any) => void = () => { };

  onChange(v) {
    this.changeValue.emit(v);
  }

}
