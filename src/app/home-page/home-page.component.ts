import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  mealsCount: any = 0;
  medicalCount: any = 0;
  orphansCount: any = 0;

  constructor() { }

  ngOnInit() {
    this.incrementCount(500, 500, 500);
  }

  incrementCount(range1, range2, range3) {
    var intval = setInterval(() => {
      if (this.mealsCount < range1) {
        this.mealsCount++;
      }
      if (this.medicalCount < range2) {
        this.medicalCount++;
      }
      if (this.orphansCount < range3) {
        this.orphansCount++;
      }
    }, 1)
    if (this.mealsCount == range1 || this.medicalCount == range2 || this.orphansCount == range3) {
      clearInterval(intval);
    }
  }
}
