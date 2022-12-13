import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit{
  numberOfUFO!: string;
  totalTime!: string;
  ngOnInit() {
  }
  constructor() {
  }

  saveData() {
    localStorage.setItem('ufos', this.numberOfUFO);
    localStorage.setItem('time', this.totalTime);
  }
}
