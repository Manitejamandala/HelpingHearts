import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  donateButton() {
    this.router.navigate(['/donate_Page'])
  }
}
