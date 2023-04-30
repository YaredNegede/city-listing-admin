import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  PhotoModel: any = {
    url: null,
    photoName: null
  };
  constructor() { }

  ngOnInit(): void {
  }

}
