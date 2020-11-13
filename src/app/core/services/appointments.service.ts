import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  params:HttpParams;

  constructor(private api: ApiService) { }

  getAll(body): Observable<any> {
    this.params = body;
    return this.api.get('periods',this.params);
  }

  getId(id): Observable<any> {
    return this.api.get('records/period/' + id);
  }
  
}
