const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// Tracking variables
let lastX = 0;
let lastY = 0;


// Set line styles
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 2;


function draw(e) {
    // 1. Get the current time
    const now = new Date();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    // 2. Calculate the "Hue" based on the current second
    // (seconds + milliseconds / 1000) gives us a smooth decimal from 0 to 60
    // We multiply by 6 because 60 seconds * 6 = 360 degrees
    const currentHue = (seconds + milliseconds / 1000) * 6;

    ctx.beginPath();
    ctx.strokeStyle = `hsl(${currentHue}, 100%, 50%)`;
    
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();

    [lastX, lastY] = [e.clientX, e.clientY];
}

// Draw on every movement
window.addEventListener('mousemove', draw);

// Reset "initialized" when the mouse leaves so it doesn't 
// draw a long line across the screen when you come back in
window.addEventListener('mouseenter', (e) => {
    lastX = e.clientX;
    lastY = e.clientY;
});