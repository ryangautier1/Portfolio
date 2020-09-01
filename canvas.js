let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// context
let c = canvas.getContext("2d");

// mouse
let mouse = {
  x: undefined,
  y: undefined
}

// colors
const RAINCOLOR = '#ddd';

// rate of rainfaill
let rainRate;
if (window.innerWidth > 800) {
  rainRate = 0.5;
}
else {
  rainRate = 5;
}

// event listeners
window.addEventListener('mousemove', function () {
  // only if it is not on a small screen
  if (window.innerWidth >= 650) {
    mouse.x = event.x;
    mouse.y = event.y + window.pageYOffset;
  }
});

// for small screens
window.addEventListener('pointerdown', function() {
  if (window.innerWidth < 650) {
    mouse.x = event.x;
    mouse.y = event.y;
  }
});

// unset mouse after click is done
window.addEventListener('pointerup', function() {
  if (window.innerWidth < 650) {
    mouse.x = undefined;
    mouse.y = undefined;
  }
});

// get window height on page load
let initialHeight = window.innerHeight;
let initialWidth = window.innerWidth;
window.addEventListener('resize', function () {
  // compare height on page load to new height after resizing. will be greater
  // than 100 if not from mobile hiding top bar.
  // also check width
  if (Math.abs(window.innerHeight - initialHeight) > 100 || Math.abs(window.innerWidth - initialWidth) > 100) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
  }
})




function Raindrop(x, dx, dy) {
  this.x = x;
  this.y = 0;
  this.h = 25;
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
    // offset of 80 for mobile
    if (this.y > innerHeight + this.h / 2 + 80) {
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

function Mountain(startX, startY, peakX, peakY, endX, endY, color) {
  c.strokeStyle = color; // line color
  c.beginPath();
  c.moveTo(startX, startY);
  c.lineTo(peakX, peakY);
  c.lineTo(endX, endY);
  c.closePath();
  c.fillStyle = color;
  c.fill();
  c.stroke();
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
    // offset of 80 for mobile
    if (this.y > innerHeight + 80) {
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
let interval;

function init() {
  raindropArray = [];
  bouncingRaindropArray = [];
  clearInterval(interval);
  interval = setInterval(function () {
    let x1 = Math.random() * (innerWidth);
    let x2 = Math.random() * (innerWidth);

    let dx = 6;
    let dy = 25;

    raindropArray.push(new Raindrop(x1, dx, dy));
    raindropArray.push(new Raindrop(x2, dx, dy));
  }, rainRate);
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight*1.75);

  // rear mountains
  new Mountain(-2 * innerWidth / 9, innerHeight, 1 * innerWidth / 9, innerHeight * 0.55, 4 * innerWidth / 9, innerHeight, '#293944');
  new Mountain(0, innerHeight, 3 * innerWidth / 9, innerHeight * 0.55, 6 * innerWidth / 9, innerHeight, '#293944');
  new Mountain(3 * innerWidth / 9, innerHeight, 6 * innerWidth / 9, innerHeight * 0.55, 9 * innerWidth / 9, innerHeight, '#293944');
  new Mountain(5 * innerWidth / 9, innerHeight, 8 * innerWidth / 9, innerHeight * 0.55, 11 * innerWidth / 9, innerHeight, '#293944');
  // big middle mountain
  new Mountain(0, innerHeight, innerWidth / 2, innerHeight * 0.5, innerWidth, innerHeight, '#314755');
  // middle row of two mountains
  new Mountain(-100, innerHeight, innerWidth / 4, innerHeight * 0.65, innerWidth / 2 + 100, innerHeight, '#364d5c');
  new Mountain(innerWidth / 2 - 100, innerHeight, 3 * innerWidth / 4, innerHeight * 0.65, innerWidth + 100, innerHeight, '#364d5c');
  // front dark mountains
  new Mountain(-50, innerHeight, innerWidth / 6, innerHeight * 0.8, innerWidth / 3 + 50, innerHeight, '#2b3d49');
  new Mountain(innerWidth / 3 - 50, innerHeight, innerWidth / 2, innerHeight * 0.8, 2 * innerWidth / 3 + 50, innerHeight, '#2b3d49');
  new Mountain(2 * innerWidth / 3 - 50, innerHeight, 5 * innerWidth / 6, innerHeight * 0.8, innerWidth + 50, innerHeight, '#2b3d49');



  for (let i = 0; i < raindropArray.length; i++) {
    raindropArray[i].update();
  }
  for (let i = 0; i < bouncingRaindropArray.length; i++) {
    bouncingRaindropArray[i].update();
  }
}
init();
animate();