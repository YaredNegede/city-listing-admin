import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../enviroments/environment'


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.url}/auth/authenticate`, {
      email,
      password
    }, httpOptions);
  }

  register(firstName: string,lastName: string, email: string, password: string): Observable<any> {
    console.log(environment)
    return this.http.post(`${environment.url}/auth/register`, {
      firstName,
      lastName,
      email,
      password
    }, httpOptions);
  }
}
