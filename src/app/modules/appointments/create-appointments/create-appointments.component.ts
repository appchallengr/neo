import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-create-appointments',
  templateUrl: './create-appointments.component.html',
  styleUrls: ['./create-appointments.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateAppointmentsComponent implements OnInit {

  selectedCar: number;
  items:any = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
