// TO DO
// Add Timer/Alert for after color is assigned
// Zoom on click
// Mousewheel Zoom
// Mousemove scroll left/right

// COLOR PALLETE AND ASSIGNMENT
let colors = {
    white: '#FFFFFF',
    black: '#000000',
    red: '#FF0000',
    orange: '#FF7F00',
    yellow: '#FFFF00',
    green: '#00FF00',
    blue: '#0000FF',
    purple: '#9400D3',
    brown: '#964B00'
};

// Is this first Variable better or worse in terms of clean code?
const redSwatch = document.getElementById('red')
const blueSwatch = document.getElementById('blue')
const greenSwatch = document.getElementById('green')
const yellowSwatch = document.getElementById('yellow')
const whiteSwatch = document.getElementById('white')
const blackSwatch = document.getElementById('black')
const orangeSwatch = document.getElementById('orange')
const purpleSwatch = document.getElementById('purple')
const brownSwatch = document.getElementById('brown')

redSwatch.style.backgroundColor = colors.red
blueSwatch.style.backgroundColor = colors.blue
greenSwatch.style.backgroundColor = colors.green
yellowSwatch.style.backgroundColor = colors.yellow
whiteSwatch.style.backgroundColor = colors.white
blackSwatch.style.backgroundColor = colors.black
orangeSwatch.style.backgroundColor = colors.orange
purpleSwatch.style.backgroundColor = colors.purple
brownSwatch.style.backgroundColor = colors.brown

const pixel = document.querySelector('.pixel')
const pallete = document.getElementById('pxl1_pallete')
let currentPixel = ''


// This function sets a dark border on the selected pixel, 
// clears previous pixel borders, and grabs pixel id for color change
function pixelHighlight(id) {
    pallete.classList.add('pallete_in')

    // Creates List of Pixels
    let previousPixels = document.querySelectorAll('.pixel')
    function resetBorders() {
        for (var x = 0; x < previousPixels.length; x++) {
            previousPixels[x].style.border = '0px solid gray' 
        }
    } resetBorders()

    // Sets captured pixel to global variable
    currentPixel = document.getElementById(id)
    currentPixel.style.border = '2px black solid'
}


function assignColor(id) {
    // Gets id of selected pixel
    currentPixel.style.backgroundColor = id
    
    // resets pixel border and hides Color Pallete
    currentPixel.style.border = '0px solid gray'
    pallete.classList.remove('pallete_in')

}


// Need another function that houses assignColor and calls it if the timer is at zero

// TIMER FUNCTION STARTS ON COLOR ASSIGNMENT
/*     let timeLeft = 10;
    var elem = document.getElementById('timer');
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == 0) {
            clearTimeout(timerId);
            elem.innerHTML = 'Turn available!';
            timeLeft = 0;
        } else {
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    }  */

















