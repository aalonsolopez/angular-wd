class Screen {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setup() {
    createCanvas(this.width, this.height);
    frameRate(60);
  }
}
