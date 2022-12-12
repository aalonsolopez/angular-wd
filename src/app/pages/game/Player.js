class Player {
    constructor(x, y, texture, vel) {
        this.x = x;
        this.y = y;
        this.texture;
        this.vel = vel;
    }

    move (x) {
        this.x += x * vel;
    }
    show() {
        loadImage(this.texture);
        image(img, 0, 0);
    }
}
