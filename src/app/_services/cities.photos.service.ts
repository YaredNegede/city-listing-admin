import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import environment from '../environment'

@Injectable({
  providedIn: 'root'
})
export class CityPhotoService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(`${environment.url}/cities/`, { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(`${environment.url}`, { responseType: 'text' });
  }
}
