import { Component, OnInit } from '@angular/core';
import { CitiesResult } from '../models/cities.model';
import { CityService } from '../_services/cities.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;
  cities?: CitiesResult;
  cityName: string = ""
  constructor(private userService: CityService,
    private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.loadCities()
  }

  loadCities(){
    this.userService.getPublicContent().subscribe({
      next: data => {
        this.cities = data;
      },
      error: err => {
        // this.content = JSON.parse(err.error).message;
      }
    });
  }

  addCity(): void {
    this.userService.addCity({name: this.cityName})
    .subscribe({
      next: () => {
        this.loadCities()
      },
      error: err => {
        // this.content = JSON.parse(err.error).message;
      }
    });
  }

  delete(event: any): void {
    this.userService.delete(event.target.id)
    .subscribe({
      next: () => {
        this.loadCities()
      },
      error: err => {
        // this.content = JSON.parse(err.error).message;
      }
    });
  }
  edit(event: any): void {
    this.userService.edit(event.target.id)
    .subscribe({
      next: () => {
        this.loadCities()
      },
      error: err => {
        // this.content = JSON.parse(err.error).message;
      }
    });
  }

}
