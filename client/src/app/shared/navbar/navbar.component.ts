import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showNavbar = false;

  toggleNavbar(): void {
    this.showNavbar = !this.showNavbar;
  }

  constructor() { }

  ngOnInit() {
  }

}
