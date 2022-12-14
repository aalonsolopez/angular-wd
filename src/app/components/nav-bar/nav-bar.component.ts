import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  isLogged: boolean = localStorage.getItem('token') !== null;
  ngOnInit()  {
  }

  logoff() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.reload();
  }
  constructor() {
  }
}
