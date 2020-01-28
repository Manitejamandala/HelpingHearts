import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { ContactusPageComponent } from './contactus-page/contactus-page.component';
import { DonatePageComponent } from './donate-page/donate-page.component';
import { GetinvolvedPageComponent } from './getinvolved-page/getinvolved-page.component';
import { PhotosPageComponent } from './photos-page/photos-page.component';


const routes: Routes = [
  { path: "", component: FirstPageComponent },
  { path: "contact_us", component: ContactusPageComponent },
  { path: "donate_Page", component: DonatePageComponent },
  { path: "get_Involved", component: GetinvolvedPageComponent },
  { path: "all_Photos", component: PhotosPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
