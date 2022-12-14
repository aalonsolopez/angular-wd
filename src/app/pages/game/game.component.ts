import { Component, OnInit } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent {
  pid!: any;
  score: any = 0
  themissile!: any;
  theufo!: any;
  ufo_hstep: any = 5;
  launchedMissile: boolean = false;
  gameover: boolean = false;
  constructor() {
    this.themissile = document.getElementById("missile");
    this.theufo = document.getElementById("ufo");
    this.timer();
    if (!this.gameover) {
      document.onkeydown = this.keyboardController;
      this.UFOlaunch();
    }
  }

  UFOlaunch() {
    //Supress comment signs in next line
    setInterval(this.MoveUFO, 25);
  }

  pullTrigger() {
    this.pid = setInterval(this.launch, 10);
  }

  launch() {
    var uLimit = window.innerHeight,
      vpos_m,
      vstep = 5;
    vpos_m = parseInt(this.themissile.style.bottom);
    if (checkforaHit()) {
      clearInterval(this.pid);
      this.launchedMissile = false;
      vpos_m = 0;
      this.score = this.score + 100;
      document.getElementById("points").innerHTML = score;
      this.theufo.src = "imgs/explosion.gif";
      setTimeout(() => {
        this.theufo.src = "imgs/ufo.png";
      }, 10000);
      //stop the missile
      //update punctuation in the panel
      //Show the image for the hit
    }
    //if vpos_m is higher than upperlimit
    //stop the missile
    // else
    // do the missile to move vstep pixels up
    if (vpos_m > uLimit) {
      clearInterval(this.pid);
      document.getElementById("points").innerHTML = score - 25; //Para que pare de moverse cuando vuelve a la parte de abajo
      this.launchedMissile = false;
      vpos_m = 0;
    }
    vpos_m = vpos_m + vstep;
    vpos_m = vpos_m + "px";
    this.themissile.style.bottom = vpos_m;
  }

  moveMissileRight() {
    var rLimit = window.innerWidth,
      hpos_m,
      misWidth,
      hstep = 5;
    hpos_m = parseInt(this.themissile.style.left);
    misWidth = parseInt(this.themissile.style.width);
    if (hpos_m + misWidth + 8 < rLimit) {
      //8 es el margen que le pone el navegador por defecto y si no lo pones sale scroll horizontal
      hpos_m = hpos_m + hstep;
      hpos_m = hpos_m + "px"; //Concatenar para poner las unidades
      this.themissile.style.left = hpos_m;
    }
  }

  moveMissileLeft() {
    var hpos_m,
      hstep = 5;
    hpos_m = parseInt(this.themissile.style.left);
    if (hpos_m > 0) {
      hpos_m = hpos_m - hstep;
      hpos_m = hpos_m + "px";
      this.themissile.style.left = hpos_m;
    }
  }

  keyboardController(theEvent: any) {
    //No vale para Internet Explorer
    let interval = 15;
    let code = theEvent.key; //Coge la tecla que estás pulsando
    switch (code) {
      case "ArrowRight":
        if (this.launchedMissile == false) {
          this.moveMissileRight();
        }
        break;
      case "ArrowLeft":
        if (this.launchedMissile == false) {
          this.moveMissileLeft();
        }
        break;
      case " ":
        if (!this.launchedMissile) {
          //para que no puedas darle muchas veces a la barra espaciadora y el misil empiece a ir rápido sin parar
          this.launchedMissile = true;
          this.pid = setInterval(this.launch, interval);
        }
        break;
    }
  }

  timer() {
    let timeLeft = localStorage.getItem("time");
    var myModal = new Bootstrap.Modal(document.getElementById("myModal"), {
      keyboard: false,
    });
    let x = setInterval(() => {
      document.getElementById("timer").innerHTML = timeLeft--;
      if (timeLeft <= 0) {
        clearInterval(x);
        myModal.show();
        setInterval(() => {
          clearInterval(pid);
        }, 5);
      }
    }, 1000);
  }

  MoveUFO() {
    var Rlimit = window.innerWidth;
    //Program here UFO movement
    var hpos_ufo: any = parseInt(this.theufo.style.left),
      width_ufo = parseInt(this.theufo.style.width);
    //let ufo_hstep = 5; No se hace aquí si no con una variable global por que si no cada vez que se llame a la función volvería a ser este valor

    if (hpos_ufo + width_ufo + 8 > Rlimit || hpos_ufo < 0) {
      this.ufo_hstep = this.ufo_hstep * -1; //Cambia el signo para que cambie de dirección cuando llega al borde
    }

    hpos_ufo = hpos_ufo + this.ufo_hstep;
    hpos_ufo = hpos_ufo + "px";
    this.theufo.style.left = hpos_ufo;
  }

    //No es la mejor manera de hacerlo, es mejor que la referencia esté cada vez que se use


}
