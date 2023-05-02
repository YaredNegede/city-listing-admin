import { CityService } from './../_services/cities.service';
import { Component, Input, OnInit } from '@angular/core';
import { finalize, Subscription } from 'rxjs';
import environment from '../environment'
import { Photo } from '../models/photo.model';
import { ActivatedRoute } from '@angular/router';
import { CityPhotoService } from '../_services/cities.photos.service';
import { CitiesResult } from '../models/cities.model';
import { PhotoResult } from '../models/photo.result.model';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-add-city-photo',
  templateUrl: './add-city-photo.component.html',
  styleUrls: ['./add-city-photo.component.css']
})
export class AddCityPhotoComponent implements OnInit {

  isLoggedIn = false;
  cityPhotosResult?: PhotoResult
  fileToUpload: File | null = null
  photoName: string | null = null
  photo: Photo[] = []

  constructor(
    private tokenStorageService: TokenStorageService,
    private route: ActivatedRoute,
    private cityPhotoService: CityPhotoService,
    private cityService: CityService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.loadCityPhoto()
  }

  handleFileInput(event:any) {
    if(event.target.files.item(0)){
      this.cityService
          .uploadCityPhoto(event.target.files[0],event.target.files[0].name)
          .subscribe(res=>{
            const photo: Photo = {photoUrl:`${environment.url}/city/image/${res}`, photoName:""}
            this.photo.push(photo)
          })
    }
  }

  delete(event:any) {
    this.photo.splice(event.srcElement?.id,1)
  }

  save(event:Event) {
    const target = event.target as HTMLButtonElement;
    const index = Number.parseInt(target.id)
    const cityId = this.route.snapshot.paramMap.get('id')
    if(cityId){
       this.cityService
        .addCityPhoto(cityId ,this.photo[index])
        .subscribe(res=>{
          this.loadCityPhoto()
          this.photo.splice(index)
        })
    }
  }

  loadCityPhoto(){
    const cityId = this.route.snapshot.paramMap.get('id')
    this.cityPhotoService.getPublicCityPhotoContent(cityId)
    .subscribe(res=>{
      console.log(res)
      this.cityPhotosResult = res
    })
  }

}
