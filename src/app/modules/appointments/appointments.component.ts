import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentsService } from 'src/app/core/services/appointments.service';
import { Body } from 'src/app/core/models/Body';
import { Column } from 'src/app/core/models/Column';
import { Period } from 'src/app/core/models/Period';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {


  body: Body;
  columns: Column[];
  loading:boolean = true;
  result:Period[];

  constructor(private router: Router, private crudService: AppointmentsService) {
    
  }

  ngOnInit(): void {

    this.columns = [
      { name: "Mês", sort: true, sortAsc: false, sortDesc: false, field: "startDate" },
      { name: "Periodo", sort: true, sortAsc: false, sortDesc: false, field: "startDate" },
      { name: "Máximo de Horas", sort: true, sortAsc: false, sortDesc: false, field: "maxMinutes" },
      { name: "Total Apontado", sort: true, sortAsc: false, sortDesc: false, field: "registeredMinutes" },
      { name: "Status", sort: true, sortAsc: false, sortDesc: false, field: "status" }
    ]

    this.body = {
      page: 0,
      size: 15,
      sort: 'id',
      sortDir: 'asc'
    }

    this.getAll();
  }

  goDetails(){
    this.router.navigate(['/apontamentos/detalhes/2']);
  }

  getAll(){
    this.loading = true;
    this.crudService.getAll(this.body).subscribe((data: any) => {
      console.log("data",data);
      this.loading = false;
      this.result = data;
    })
  }

  sort(column:Column){
    this.body.sort = column.field;
    if(column.sortAsc){
      column.sortAsc = false;
      column.sortDesc = true;
      this.body.sortDir = 'desc';
    }else{
      column.sortAsc = true;
      column.sortDesc = false;
      this.body.sortDir = 'asc';
    }
    this.getAll();
  }

  convertToHour(value){
    let retorno;
    retorno = value / 60;
    retorno = retorno.toFixed(2);
    retorno = retorno.replace(".", ":");
    return retorno;
  }
}
