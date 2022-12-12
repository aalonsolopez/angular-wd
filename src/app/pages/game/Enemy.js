class Enemy {
  constructor(texture,x, y, screen) {
    this.texture = texture;
    this.x = x;
    this.y = y;
    this.screen = screen;
    this.speed = Math.random(1,50);
  }
  show() {
      let img = loadImage(this.texture);
      image(img, x, y);
  }
  move (dir){ // +1 der / -1 izq
    this.x += dir * this.speed;

    if (this.x == this.screen.width || this.x == 0) {
      dir *= -1;
    }
  }
}
