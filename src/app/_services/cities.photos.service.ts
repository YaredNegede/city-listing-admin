import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../enviroments/environment'
import { PhotoResult } from '../models/photo.result.model';

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

  delete(id: any): Observable<any> {
    return this.http.delete(`${environment.url}/cities/${id}/photo`, { responseType: 'text' });
  }

  getPubliCityPhotoContent(cityId: number,currentPage: number=0,size: number=10): Observable<PhotoResult> {
    return this.http.get<PhotoResult>(`${environment.url}/cities/public/${cityId}/city-photos?currentPage=${currentPage}&?size=${size}`);
  }
  getPublicOneCityPhotoContent(cityId: any, keyword:string): Observable<PhotoResult> {
    return this.http.get<PhotoResult>(`${environment.url}/cities/public/${keyword}/photo`);
  }
}
