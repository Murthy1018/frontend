import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isUserLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    let userName = localStorage.getItem('currentUser');
    this.isUserLoggedIn = userName != undefined && userName != null ;
  }

  onLogout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
