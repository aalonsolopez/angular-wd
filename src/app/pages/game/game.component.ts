import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  timeTotal: string | null;
  numberOfUFO: string | null;
  canvas: HTMLCanvasElement | null;
  constructor() {
    this.numberOfUFO = localStorage.getItem("ufo");
    this.timeTotal = localStorage.getItem("time");
    this.canvas = document.createElement("canvas");
  }

  ngOnInit() {
    
  }

  setup() {

  }
}
