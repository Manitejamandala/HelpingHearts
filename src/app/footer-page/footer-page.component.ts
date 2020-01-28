import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.css']
})
export class FooterPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  donateButton() {
    this.router.navigate(['/donate_Page'])
  }

}
