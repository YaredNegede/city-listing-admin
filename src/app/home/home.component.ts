import { Component, OnInit } from '@angular/core';
import { CitiesResult, Content } from '../models/cities.model';
import { CityService } from '../_services/cities.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  keyword = 'name';
  data: Array<Content> = [];

  isLoggedIn = false;
  cities?: CitiesResult;
  cityName: string = ""

  constructor(
    private userService: CityService,
    private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.loadAllCities()
  }

  selectEvent(val: Content) {
    this.loadCities(val.name)
  }

  onChangeSearch(val: string) {
    this.loadCities(val)
  }

  onFocused(e: any){
    // do something when input is focused
  }

  //


  loadAllCities(){
    this.userService.getAllPublicContent().subscribe({
      next: data => {
        this.cities = data;
        if(this.cities){
          this.cities.content.forEach(c=>{
            this.data.push(c)
          })

        }
      },
      error: err => {
        // this.content = JSON.parse(err.error).message;
      }
    });
  }

  loadCities(name?:string){
    this.userService.getPublicContent(name).subscribe({
      next: data => {
        this.cities = data;
        if(this.cities){
          this.cities.content.forEach(c=>{
            this.data.push(c)
          })

        }
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
