import { Component, OnInit } from '@angular/core';
import { CitiesResult } from '../models/cities.model';
import { City } from '../models/city.model';
import { CityService } from '../_services/cities.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  keyword = 'name';
  isLoggedIn = false;
  cities?: CitiesResult;
  cityName: string = ""
  countryName: string = ""


  page: number = 0
  size: number = 10

  constructor(
    private userService: CityService,
    private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.loadAllCities()
  }

  selectEvent(val: City) {
    this.loadCities(val.name)
  }

  onChangeSearch(val: string) {
    this.loadCities(val)
  }

  onFocused(e: any){
    // do something when input is focused
  }


  loadAllCities(name?: string,currentPage?: number,size?: number){
    this.userService.getAllPublicContent(name,currentPage,size).subscribe({
      next: data => {
        this.cities = data;
      },
      error: err => {
        alert("Error")
      }
    });
  }

  loadCities(name?:string){
    this.userService.getPublicContent(name).subscribe({
      next: data => {
        this.cities = data
      },
      error: err => {
        alert("Error")
      }
    });
  }

  addCity(): void {
    this.userService.addCity({name: this.cityName,countryName:this.countryName})
    .subscribe({
      next: () => {
        this.loadCities()
      },
      error: err => {
        alert("Error")
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
        alert("Error")
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
        alert("Error")
      }
    });
  }

  next(){
    if(this.page > -1){
      this.loadAllCities(undefined,++this.page,this.size)
    }

  }

  prev(){
    if(this.page > -1){
      this.loadAllCities(undefined,--this.page, this.size)
    }
  }

}
