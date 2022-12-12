import "./Player.js";
import "./Screen.js";
import "./Enemy.js";

let numEnemigos = 5;
let enemies = [];

let screen = new Screen(800, 500);
let player = new Player(0, 0, "../../../assets/missile.png", 1);

//spawn enemies
for (let i = 0; i < numEnemigos; i++){
  enemies.push(new Enemy("",(screen.width) - Math.random() * screen.width, (screen.height - 100) - Math.random() * (screen.height - 100),screen))
}

function draw() {
  //player logic
  player.show();
  if (keyIsDown(68)) {
    player.move(1);
  }
  if (keyIsDown(65)) {
    player.move(-1);
  }
}

