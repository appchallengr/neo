import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface Appointments {
  mes: string;
  periodo: string;
  maximoHoras: number;
  total: number;
  status: number;
}

const Dados_Appointments: Appointments[] = [
  {mes: 'Janeiro 2020', periodo: '22/12/2019 à 23/01/2020', maximoHoras: 160, total: 73.30, status: 1 },
  {mes: 'Dezembro 2019', periodo: '22/12/2019 à 23/01/2020', maximoHoras: 160, total: 143.30, status: 2 },
  {mes: 'Novembro 2019', periodo: '22/12/2019 à 23/01/2020', maximoHoras: 160, total: 143.30, status: 2 },
  {mes: 'Outubro 2019', periodo: '22/12/2019 à 23/01/2020', maximoHoras: 160, total: 143.30, status: 2 },
  {mes: 'Setembro 2019', periodo: '22/12/2019 à 23/01/2020', maximoHoras: 160, total: 143.30, status: 2 }
];

@Component({
  selector: 'app-leader-appointments',
  templateUrl: './leader-appointments.component.html',
  styleUrls: ['./leader-appointments.component.css']
})
export class LeaderAppointmentsComponent implements OnInit {

  items:any = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  displayedColumns: string[] = [
    'mes',
    'periodo',
    'maximoHoras',
    'total',
    'status',
    'acao'
  ];
  data = Dados_Appointments;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  constructor() { }

  ngOnInit(): void {
  }

}
