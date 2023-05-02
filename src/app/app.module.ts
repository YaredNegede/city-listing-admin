import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { AuthService } from './_services/auth.service';
import { TokenStorageService } from './_services/token-storage.service';
import { CityService } from './_services/cities.service';
import { CityPhotoService } from './_services/cities.photos.service';
import { PhotoComponent } from './photo/photo.component';
import { AddCityPhotoComponent } from './add-city-photo/add-city-photo.component';
import { AuthInterceptor } from './util/auth-intercepter';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PhotosComponent,
    PhotoComponent,
    AddCityPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    TokenStorageService,
    CityService,
    CityPhotoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
