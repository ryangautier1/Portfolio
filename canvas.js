let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// context
let c = canvas.getContext("2d");


let mouse = {
  x: undefined,
  y: undefined
}

const RAINCOLOR = '#ddd';


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
  this.color = RAINCOLOR;

  this.draw = function () {
    c.beginPath();
    c.moveTo(this.x, this.y - this.h);
    c.lineTo(this.x, this.y);
    c.strokeStyle = this.color;
    c.stroke();
  }

  this.update = function () {
    if (this.y > innerHeight + this.h / 2) {
      raindropArray.splice(raindropArray.indexOf(this), 1);
    }
    // this.x += this.dx;
    this.y += this.dy;

    // interactivity
    // if the raindrop comes within 50px of mouse
    if (Math.sqrt(Math.pow(mouse.x - this.x, 2) + Math.pow(mouse.y - this.y, 2)) < 50) {
      // if the raidrop is on the right of the mouse and toward the edge of the mouse-circle
      if (mouse.x <= this.x && this.x - mouse.x > 15) {
        bouncingRaindropArray.push(new BouncingRaindrop(this.x, this.y, 3, -0.75));
      }
      // if the raidrop is on the right of the mouse and toward the center of the mouse-circle
      else if (mouse.x <= this.x) {
        bouncingRaindropArray.push(new BouncingRaindrop(this.x, this.y, 3, -2));
      }
      // if the raidrop is on the left of the mouse and toward the edge of the mouse-circle
      else if (mouse.x > this.x && mouse.x - this.x > 15) {
        bouncingRaindropArray.push(new BouncingRaindrop(this.x, this.y, -3, -0.75));
      }
      // if the raidrop is on the left of the mouse and toward the center of the mouse-circle
      else {
        bouncingRaindropArray.push(new BouncingRaindrop(this.x, this.y, -3, -2));
      }
      raindropArray.splice(raindropArray.indexOf(this), 1);
    }


    this.draw();
  }
}


let bouncingRaindropArray;
function BouncingRaindrop(x, y, dx, dy) {
  this.x = x;
  this.y = y;
  this.r = 1;
  this.dx = dx;
  this.dy = dy;
  this.color = '#fff';

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    c.stroke();
    c.fillStyle = this.color;
    c.fill();
  }

  this.update = function () {
    if (this.y > innerHeight) {
      bouncingRaindropArray.splice(bouncingRaindropArray.indexOf(this), 1);
    }

    if (this.dy < 30) {
      this.dy += 0.5;
    }
    this.x += this.dx;
    this.y += this.dy;



    this.draw();
  }
}

let raindropArray;

function init() {
  raindropArray = [];
  bouncingRaindropArray = [];
  let interval = setInterval(function () {
    let x1 = Math.random() * (innerWidth);
    let x2 = Math.random() * (innerWidth);

    let dx = 6;
    let dy = 25;

    raindropArray.push(new Raindrop(x1, dx, dy));
    raindropArray.push(new Raindrop(x2, dx, dy));
  }, 0.5);
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i=0; i < raindropArray.length; i++) {
    raindropArray[i].update();
  }
  for (let i=0; i < bouncingRaindropArray.length; i++) {
    bouncingRaindropArray[i].update();
  }
}
init();
animate();