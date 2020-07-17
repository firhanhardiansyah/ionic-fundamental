import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  navigateToLoginPage() {
    this.router.navigate(['login']);
  }
}
