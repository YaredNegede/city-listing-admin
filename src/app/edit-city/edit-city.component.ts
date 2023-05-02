import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from '../models/city.model';
import { CityService } from '../_services/cities.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService,
    private tokenStorageService: TokenStorageService) { }

    city?:City

  ngOnInit(): void {
    this.loadCity()
  }
  loadCity() {
    const id = this.route.snapshot.paramMap.get('id')
    if(id){
     this.cityService.get(id)
     .subscribe(
      {
        next: data => {
          this.city = data;
        },
        error: err => {
          // this.content = JSON.parse(err.error).message;
        }
      }
     )
    }
  }

}
