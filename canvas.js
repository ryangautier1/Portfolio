let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// context
let c = canvas.getContext("2d");


let mouse = {
  x: undefined,
  y: undefined
}


window.addEventListener('mousemove', function () {
  mouse.x = event.x;
  mouse.y = event.y;
})

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
})

function Raindrop(x, dx, dy) {
  this.x = x;
  this.y = 0;
  this.h = 50;
  this.dx = dx;
  this.dy = dy;
  this.color = '#ddd';

  this.draw = function () {
    c.beginPath();
    c.moveTo(this.x, this.y - this.h);
    c.lineTo(this.x, this.y);
    c.strokeStyle = this.color;
    c.stroke();
  }

  this.update = function () {
    if (this.y > innerHeight + this.h/2) {
      raindropArray.splice(raindropArray.indexOf(this), 1);
    }
    // this.x += this.dx;
    this.y += this.dy;

    // interactivity
    // if (mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
    //   mouse.y - this.y < 50 && mouse.y - this.y > -50
    // ) {
    //   if (this.radius < maxRadius) {
    //     this.radius += 1.5;
    //   }
    // }
    // else if (this.radius > this.minRadius) {
    //   this.radius -= 1.5;
    // }

    this.draw();
  }
}


let raindropArray;

function init() {
  raindropArray = [];
  let interval = setInterval(function() {
    let x = Math.random() * (innerWidth);

    let dx = 6;
    let dy = 40;

    raindropArray.push(new Raindrop(x, dx, dy));
  }, 5);
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < raindropArray.length; i++) {
    raindropArray[i].update();
  }
}
init();
animate();