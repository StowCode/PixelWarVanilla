// TO DO
// Darken border of box on click and store pixel id in variable
// Show pallete on click
// Add Timer/Alert for after color is assigned

// Detach Pallete and make it pop up from bottom of screen


// COLOR PALLETE AND ASSIGNMENT

let colors = {
    white: '#FFFFFF',
    red: '#FF0000',
    blue: '#0000FF',
    green: '#00FF00',
    yellow: '#FFFF00'
};

// Is this first Variable better or worse in terms of clean code?
const redSwatch = document.getElementById('red').style.backgroundColor = colors.red
const blueSwatch = document.getElementById('blue')
const greenSwatch = document.getElementById('green')
const yellowSwatch = document.getElementById('yellow')
const whiteSwatch = document.getElementById('white')

/* redSwatch.style.backgroundColor = colors.red */
blueSwatch.style.backgroundColor = colors.blue
greenSwatch.style.backgroundColor = colors.green
yellowSwatch.style.backgroundColor = colors.yellow
whiteSwatch.style.backgroundColor = colors.white

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
    currentPixel.style.backgroundColor = id
    // Hides Color Pallete

    currentPixel.style.border = '0px solid gray'
    pallete.classList.remove('pallete_in')


    // TIMER FUNCTION STARTS ON COLOR ASSIGNMENT
    const timerBox = document.getElementById('timer')
    let initTime = 30;
 
    timerBox.innerHTML = initTime + ' Seconds before next turn';
}


















