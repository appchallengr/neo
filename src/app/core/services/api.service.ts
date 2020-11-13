import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions;
  token;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.token = this.authService.getToken();
    this.httpOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  }

  public get(path: string, Params?: HttpParams): Observable<any> {
    console.log("teste",this.httpOptions);
    
    return this.http.get(`${environment.API_URL}/${path}`, {
      params: Params
    })
  }

  public put(path: string, body: object = {}): Observable<any> {
    return this.http.put(
      `${environment.API_URL}/${path}`,
      JSON.stringify(body), this.httpOptions);
  }

  public patch(path: string, body: object = {}): Observable<any> {
    return this.http.patch(
      `${environment.API_URL}/${path}`,
      JSON.stringify(body), this.httpOptions);
  }

  public post(path: string, body: object = {}): Observable<any> {
    return this.http.post(
      `${environment.API_URL}/${path}`,
      JSON.stringify(body),
      this.httpOptions);
  }
}
