console.log("Dummy test");

var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");
// Square
c.fillStyle = "rgba(255,0,0,0.5)";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "rgba(0,0,255,0.5)";
c.fillRect(300, 100, 100, 100);
c.fillStyle = "rgba(0,255,0,0.5)";
c.fillRect(200, 300, 100, 100);
console.log("canvas", canvas);

// Line
c.beginPath();
c.moveTo(50, 500);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "red";
c.stroke();

// Circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();

for (var i = 0; i < 1000; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  //   c.arc((i + 1) * 100, (i + 2) * 100, 30, 0, Math.PI * 2, false);
  c.strokeStyle = "blue";
  c.stroke();
}
