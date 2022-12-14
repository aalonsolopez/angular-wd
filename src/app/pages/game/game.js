var pid,
  score = 0,
  themissile,
  theufo,
  ufo_hstep = 5,
  launchedMissile = false,
  gameover = false;

function UFOlaunch() {
  //Supress comment signs in next line
  setInterval(MoveUFO, 25); //25 milisegundos
}

function MoveUFO() {
  var Rlimit = window.innerWidth;
  //Program here UFO movement
  var hpos_ufo = parseInt(theufo.style.left),
    width_ufo = parseInt(theufo.style.width);
  //let ufo_hstep = 5; No se hace aquí si no con una variable global por que si no cada vez que se llame a la función volvería a ser este valor

  if (hpos_ufo + width_ufo + 8 > Rlimit || hpos_ufo < 0) {
    ufo_hstep = ufo_hstep * -1; //Cambia el signo para que cambie de dirección cuando llega al borde
  }

  hpos_ufo = hpos_ufo + ufo_hstep;
  hpos_ufo = hpos_ufo + "px";
  theufo.style.left = hpos_ufo;
}

function pullTrigger() {
  pid = setInterval(launch, 10);
}

function checkforaHit() {
  var hpos_ufo = parseInt(theufo.style.left),
    vpos_ufo = parseInt(theufo.style.bottom),
    width_ufo = parseInt(theufo.style.width),
    vpos_m = parseInt(themissile.style.bottom),
    hpos_m = parseInt(themissile.style.left),
    width_m = parseInt(themissile.style.width),
    height_m = parseInt(themissile.style.height),
    hit = false;
  // detect here if missile hits ufo
  hit =
    vpos_m + height_m >= vpos_ufo &&
    hpos_m >= hpos_ufo &&
    hpos_m <= hpos_ufo + width_ufo;
  return hit;
}

function launch() {
  var uLimit = window.innerHeight,
    vpos_m,
    vstep = 5;
  vpos_m = parseInt(themissile.style.bottom);
  if (checkforaHit()) {
    clearInterval(pid);
    launchedMissile = false;
    vpos_m = 0;
    score = score + 100;
    document.getElementById("points").innerHTML = score;
    theufo.src = "imgs/explosion.gif";
    setTimeout(() => {
      theufo.src = "imgs/ufo.png";
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
    clearInterval(pid);
    document.getElementById("points").innerHTML = score - 25; //Para que pare de moverse cuando vuelve a la parte de abajo
    launchedMissile = false;
    vpos_m = 0;
  }
  vpos_m = vpos_m + vstep;
  vpos_m = vpos_m + "px";
  themissile.style.bottom = vpos_m;
}

function moveMissileRight() {
  var rLimit = window.innerWidth,
    hpos_m,
    misWidth,
    hstep = 5;
  hpos_m = parseInt(themissile.style.left);
  misWidth = parseInt(themissile.style.width);
  if (hpos_m + misWidth + 8 < rLimit) {
    //8 es el margen que le pone el navegador por defecto y si no lo pones sale scroll horizontal
    hpos_m = hpos_m + hstep;
    hpos_m = hpos_m + "px"; //Concatenar para poner las unidades
    themissile.style.left = hpos_m;
  }
}

function moveMissileLeft() {
  var hpos_m,
    hstep = 5;
  hpos_m = parseInt(themissile.style.left);
  if (hpos_m > 0) {
    hpos_m = hpos_m - hstep;
    hpos_m = hpos_m + "px";
    themissile.style.left = hpos_m;
  }
}

function keyboardController(theEvent) {
  //No vale para Internet Explorer
  let interval = 15;
  let code = theEvent.key; //Coge la tecla que estás pulsando
  switch (code) {
    case "ArrowRight":
      if (launchedMissile == false) {
        moveMissileRight();
      }
      break;
    case "ArrowLeft":
      if (launchedMissile == false) {
        moveMissileLeft();
      }
      break;
    case " ":
      if (!launchedMissile) {
        launchedMissile = true;
        pid = setInterval(launch, interval);
      }
      break;
  }
}

function timer() {
  let timeLeft = localStorage.getItem("time");
  var myModal = new bootstrap.Modal(document.getElementById("myModal"), {
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

function sendScore() {
  window.location.reload();
}

export default function game() {
  themissile = document.getElementById("missile");
  theufo = document.getElementById("ufo");
  timer();
  if (!gameover) {
    document.onkeydown = keyboardController;
    UFOlaunch();
  }
};
