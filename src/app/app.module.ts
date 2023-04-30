import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CitiesComponent } from './cities/cities.component';
import { PhotosComponent } from './photos/photos.component';
import { AuthService } from './_services/auth.service';
import { TokenStorageService } from './_services/token-storage.service';
import { CityService } from './_services/cities.service';
import { CityPhotoService } from './_services/cities.photos.service';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CitiesComponent,
    PhotosComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    TokenStorageService,
    CityService,
    CityPhotoService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
