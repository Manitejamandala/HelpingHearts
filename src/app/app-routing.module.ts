import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { ContactusPageComponent } from './contactus-page/contactus-page.component';
import { DonatePageComponent } from './donate-page/donate-page.component';
import { GetinvolvedPageComponent } from './getinvolved-page/getinvolved-page.component';
import { PhotosPageComponent } from './photos-page/photos-page.component';
import { MissionPageComponent } from './mission-page/mission-page.component';
import { CertificationPageComponent } from './certification-page/certification-page.component';


const routes: Routes = [
  { path: "", component: FirstPageComponent },
  { path: "contact_us", component: ContactusPageComponent },
  { path: "donate_Page", component: DonatePageComponent },
  { path: "get_Involved", component: GetinvolvedPageComponent },
  { path: "all_Photos", component: PhotosPageComponent },
  { path: "mission_Page", component: MissionPageComponent },
  { path: "certification_Page", component: CertificationPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
