import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import environment from '../environment'
import { City } from '../models/city.model';
import { CitiesResult } from '../models/cities.model';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {


  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<CitiesResult> {
    return this.http.get<CitiesResult>(`${environment.url}/cities/public`);
  }

  getPublicPhotoContent(imageUrl: string): Observable<CitiesResult> {
    return this.http.get<CitiesResult>(`${environment.url}/${imageUrl}`);
  }

  addCityPhoto(photo: Photo): Observable<any> {
    return this.http.post(`${environment.url}/photo/`, photo, { responseType: 'text' });
  }

  uploadCityPhoto(photo: File, name:string): Observable<any> {
    let formData = new FormData();
    formData.append('image', photo);
    console.log(formData)
    let params = new HttpParams();

    const options = {
      params: params,
      reportProgress: true,
    };
    // const req = new HttpRequest('POST', `${environment.url}/city/image/create?objectName=${name}`, formData, options);
    return this.http.post(`${environment.url}/city/image/create?objectName=${name}`, formData, { responseType: 'text' });
    // return this.http.request(req);
  }

  addCity(city: City): Observable<any> {
    return this.http.post(`${environment.url}/cities/`, city, { responseType: 'text' });
  }

  delete(id: number) {
    return this.http.delete(`${environment.url}/cities/${id}`, { responseType: 'text' });
  }
  edit(id: number) {
    return this.http.delete(`${environment.url}/cities/${id}`, { responseType: 'text' });
  }
}
