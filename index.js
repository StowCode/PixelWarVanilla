// TO DO
// Zoom on click
// Mousewheel Zoom
// Mousemove scroll left/right

// COLOR PALLETE AND ASSIGNMENT
const SUPPORTED_COLORS = {
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

const swatches = {}

for (const [color, hex] of Object.entries(SUPPORTED_COLORS)) {
    console.log(color, hex)
    swatches[color] = document.getElementById(color)
    swatches[color].style.backgroundColor = hex   
}

const pixel = document.querySelector('.pixel')
const pallete = document.getElementById('pxl1_pallete')
let currentPixel = ''


// This function sets a dark border on the selected pixel, 
// clears previous pixel borders, and grabs pixel id for color change
function pixelHighlight(id) {
    pallete.classList.add('pallete_in')

    // Creates List of Pixels
    let previousPixels = document.querySelectorAll('.pixel')
    
    for (var x = 0; x < previousPixels.length; x++) {
        previousPixels[x].style.border = '0px solid gray' 
    }

    // Sets captured pixel to global variable
    currentPixel = document.getElementById(id)
    currentPixel.style.border = '2px black solid'
}


// Color Assignment and Timer
let turnAvailable = true; // Determines whether assignColor can run
let timeLeft = 5; // variable for timer function and alert

function assignColor(id) {

    if (turnAvailable === true) { // checks for value of turnAvailable
        console.log('turn available')
        turnAvailable = false; // changes value and restricts turns until timer expires
    
        // Gets id of selected pixel
        currentPixel.style.backgroundColor = id
        
        // resets pixel border and hides Color Pallete
        currentPixel.style.border = '0px solid gray'
        pallete.classList.remove('pallete_in')

        // TIMER
        var elem = document.getElementById('timer');
        var timerId = setInterval(countdown, 1000);

        function countdown() {
            if (timeLeft == 0) {
                clearTimeout(timerId);
                elem.innerHTML = 'Turn available!';
                timeLeft = 10;
                turnAvailable = true; // Resets variable and allows another turn
            } else {
                elem.innerHTML = timeLeft + ' seconds until next turn!';
                timeLeft--;
            }
        } countdown()

    } else {
        pallete.classList.remove('pallete_in')
        alert(`Turn available in ${timeLeft} seconds`)
    }
}
