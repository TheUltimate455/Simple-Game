// game.js by Mlondie Lukhele
// This script contains the logic for the game
// Read the comments to understand what the code does

const width = 800;
const height = 450;
const keyDown = 40;
const keyUp = 38;
const keyLeft = 37;
const keyRight = 39;

const MOVE_AMOUNT = 5; // the number of pixels the cube is supposed to move at a time
const CUBE_WIDTH = 45;
const CUBE_HEIGHT = 45;

let direction = 'right'; // valid values are right, left, up

let cube = null;
let ticker = null;
let ticker_interval = 50;
let vy = 0;
let vxl = 0;
let vxy = 0;

let state = {
  x: width / 2,
  y: height / 2
}

window.onload = function() {
	// this to do immediately the window is loaded
	cube = document.getElementById('game-cube');
	window.addEventListener('keydown', checkKeys);
	ticker = setInterval(move, ticker_interval);
}

function checkKeys() {
	//cube.title = `The ${event.keyCode} key was pressed.`;
	let keypressed = event.keyCode;
	if (keypressed == keyLeft) direction = 'left';
	else if (keypressed == keyRight) direction = 'right';
	else if (keypressed == keyDown) direction = 'down';
	else if (keypressed == keyUp) direction = 'up';
}

function move() {
	// check which direction we're supposed to move
	switch (direction) {
		case 'right':
		// move right
		moveRight();
		break;
		
		case 'left':
		// move lefft
		moveLeft();
		break;
		
		case 'up':
		// move up
		moveUp();
		break;
		
		case 'down':
		// move down
		moveDown();
		break;
		
		default:
		say('Oh that\'s an error, unknown direction!');
		break;
	}
}

function moveLeft() {
	let current_left = getComputedStyle(cube)['left'];
	current_left = parseInt(current_left);
	if (current_left <= 0) {
		current_left = width;
	}
	current_left -= MOVE_AMOUNT;
	cube.style.left = `${current_left}px`;
}

function moveRight() {
	let current_left = getComputedStyle(cube)['left'];
	current_left = parseInt(current_left);
	if (current_left >= width - CUBE_WIDTH) {
		current_left = 0;
	}
	current_left += MOVE_AMOUNT;
	cube.style.left = `${current_left}px`;
}

function moveDown() {
	let current_top = getComputedStyle(cube)['top'];
	current_top = parseInt(current_top);
	if (current_top >= height - CUBE_HEIGHT) {
		current_top = 0;
	}
	current_top += MOVE_AMOUNT;
	cube.style.top = `${current_top}px`;
}

function moveUp() {
	let current_top = getComputedStyle(cube)['top'];
	current_top = parseInt(current_top);
	if (current_top <= 0) {
		current_top = height;
	}
	current_top -= MOVE_AMOUNT;
	cube.style.top = `${current_top}px`;
}

function say(msg) {
	document.getElementById('info-banner').innerText = msg;
}

function update(progress) {
  // Update the state of the world for the elapsed time since last render
}

function draw() {
  // Draw the state of the world
}

function loop(timestamp) {
  var progress = timestamp - lastRender

  update(progress)
  draw()

  lastRender = timestamp
  window.requestAnimationFrame(loop)
}

var lastRender = 0
window.requestAnimationFrame(loop)