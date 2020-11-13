import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Period } from 'src/app/core/models/Period';
import { AppointmentsService } from 'src/app/core/services/appointments.service';
import * as moment from 'moment';

@Component({
  selector: 'app-details-appointments',
  templateUrl: './details-appointments.component.html',
  styleUrls: ['./details-appointments.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsAppointmentsComponent implements OnInit {

  loading:boolean = true;
  notification:boolean = false;
  id:number;
  period:Period[];
  defaultPeriod:Period;
  topics:any[] = [];
  maxMinutes:number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private crudService: AppointmentsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getId();
    })
  }

  getId(){
    this.crudService.getId(this.id).subscribe((data: any) => {
      this.loading = true;
      this.period = data.period;
      this.defaultPeriod = data.period;
      data.record_list.map((e)=>{
        let val = e.start_time.split(" ");
        e.val = val[0];
        let start = new Date(e.start_time);
        let end = new Date(e.end_time);
        let diff = this.diffMinutes(end,start);
        e.diff = diff;
      });
      console.log("dataaa",data.period.max_minutes);
      this.maxMinutes = data.period.max_minutes;
      let recordList = data.record_list;
      let group = this.groupBy(recordList,"val");
      for (const [key, value] of Object.entries(group)) {
        let obj:any = {};
        obj.value = key;
        obj.data = [];
        obj.data = value;
        this.topics.push(obj);
      }
      this.topics.map((t)=>{
        let sum = 0;
        t.data.map((x)=>{
          sum = sum + x.diff;
        })
        t.sum = sum;
      })
      console.log("topic",this.topics);
      this.loading = false;
    });
  }

  sendForm(){
    this.notification = true;
  }
  
  closeNotification(){
    this.notification = false;
  }

  diffMinutes(dt2, dt1) {
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));  
  }

  groupBy(array, key){
    // Return the end result
    return array.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      return result;
    }, {}); // empty object is the initial value for result object
  };

  convertToHour(value){
    let retorno;
    retorno = value / 60;
    retorno = retorno.toFixed(2);
    retorno = retorno.replace(".", ":");
    return retorno;
  }

}
