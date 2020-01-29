import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { ContactusPageComponent } from './contactus-page/contactus-page.component';
import { DonatePageComponent } from './donate-page/donate-page.component';
import { GetinvolvedPageComponent } from './getinvolved-page/getinvolved-page.component';
import { PhotosPageComponent } from './photos-page/photos-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MissionPageComponent } from './mission-page/mission-page.component';
import { CertificationPageComponent } from './certification-page/certification-page.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    ContactusPageComponent,
    DonatePageComponent,
    GetinvolvedPageComponent,
    PhotosPageComponent,
    FooterPageComponent,
    HeaderPageComponent,
    HomePageComponent,
    MissionPageComponent,
    CertificationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
