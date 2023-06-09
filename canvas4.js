var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");
// c.lineWidth = 5;

var mouse = {
  x: undefined,
  y: undefined,
};

var maxRadius = 50;
var minRadius = 5;

var colorArray = ["#00747C", "#00BBC9", "#CACACA", "#878787", "#202022"];

window.addEventListener("resize", (event) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

window.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  console.log("mouse", mouse);
});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "red";
    // c.stroke();
    c.fill();
    c.fillStyle = this.color;
  };

  this.update = function () {
    this.draw();

    if (this.x + this.radius > innerWidth || this.x - this.radius < 0)
      this.dx = -this.dx;

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0)
      this.dy = -this.dy;

    this.x += this.dx;
    this.y += this.dy;

    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      this.radius <= 100 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50 &&
      this.radius <= maxRadius
    ) {
      this.radius += 1;
    } else if (this.radius > this.minRadius) {
      // if (this.radius > 20) this.radius -= 1;
      this.radius -= 2;
    }
  };
}

var circleArray = [];
function init() {
  circleArray = [];

  var arraySize = 1000;
  for (var i = 0; i < arraySize; i++) {
    var radius = Math.random() * 3 + 2;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = Math.random() - 0.5;
    var dy = Math.random() - 0.5;

    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}

function animate() {
  // console.log("animate");
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

init();
animate();
