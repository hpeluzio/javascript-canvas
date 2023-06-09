var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log("innerWidth", innerWidth);
console.log("innerHeight", innerHeight);
var c = canvas.getContext("2d");

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
  };

  this.update = function () {
    this.draw();

    if (this.x + this.radius > innerWidth || this.x - this.radius < 0)
      this.dx = -this.dx;
    this.x += this.dx;

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0)
      this.dy = -this.dy;
    this.y += this.dy;
  };
}

var circle = new Circle(
  200,
  200,
  (Math.random() - 0.5) * 8,
  (Math.random() - 0.5) * 8,
  50
);

function animate() {
  // console.log("animate");
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  circle.update();
}

animate();
