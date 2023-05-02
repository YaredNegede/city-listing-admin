import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { finalize, Subscription } from 'rxjs';
import { CityService } from '../_services/cities.service';
import environment from '../environment'

@Component({
  selector: 'app-add-city-photo',
  templateUrl: './add-city-photo.component.html',
  styleUrls: ['./add-city-photo.component.css']
})
export class AddCityPhotoComponent implements OnInit {
  fileToUpload: File | null = null
  photoName: string | null = null
  photoUrl: string[] = []
  constructor(private userService: CityService) { }
  ngOnInit(): void {

  }

  handleFileInput(event:any) {
    if(event.target.files.item(0)){
      this.userService
          .uploadCityPhoto(event.target.files[0],event.target.files[0].name)
          .subscribe(res=>{
            this.photoUrl.push(`${environment.url}/city/image/${res}`)
          })
    }
  }

  cancelUpload() { this.reset();}

  reset() {}

}
