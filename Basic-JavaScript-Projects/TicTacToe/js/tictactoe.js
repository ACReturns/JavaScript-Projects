//#region Properties

//This variable kepps track of whos turn it is
let activePlayer = 'X';
// This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];
//#endregion

//#region Turn placement
// Function for placing X & O in a square
function placeXOrO(squareNumber)
{
    /* This condition will ensure the square hasn't already been selected
    The .some() method is used to check each element of the selectSquare array
    to see if it contains the square number clicked on */
    if (!selectedSquares.some(element => element.includes(squareNumber)))
    {
        // THis variable retrieves the HTML element ID that was clicked
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is
        if (activePlayer === 'X')
        {
            //If active player is equal to 'X', the ,.png is placed in HTML
            select.style.backgroundImage = 'url("images/crossblades.png")';
            //Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
        }
        else
        {
            //If activePlayer is equal to 'O', the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/shield.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //Condition to check if any win conditions are met
        checkWinConditions();
        //Condition for changing active players. If its X then change to O otherwise change the activePlayer to O
        if (activePlayer === 'X')
        {
            activePlayer = 'O';
        }
        else
        {
            activePlayer = 'X';
        }

        // Function to play placement audio
        audio('./media/moveMade.wav');
        // Condition checks to see if it is the cmputers turn
        if (activePlayer === 'O')
        {
            // This function disables clicking for the computers turn
            disableClick();
            // This function waits 1 second before the computer places an image and enables click
            setTimeout(function () { computersTurn(); }, 1000);
        }
        // Returning true is needed for computersTurn() to work
        return true;
    }

    // This function results in a random square being selected by the computer
    function computersTurn()
    {
        let success = false;
        // This variable stores a random number 0 - 8
        let pickASquare;
        // This condition allows out while loop to keep trying if a square is already selected
        while (!success)
        {
            // A random  number between 0 - 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            // If the random number evaluated returns true, the square hasn't been selected yet
            if (placeXOrO(pickASquare))
            {
                // This line calls the function
                placeXOrO(pickASquare);
                // This changes our boolean and ends the loop
                success = true;
            };
        }
    }
}
//#endregion

//#region Win Conditions
/*This function parses the selectedSquares array to search for win conditions
drawLine() function is called to draw a line on the screen if the condition is met */
function checkWinConditions()
{
    // X filling spaces 0 - 8 and it's win conditions
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    // O filling spaces 0 - 8 and it's win conditions
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    /* This condition checks for a tie. If none of the above conditions are met
    and 9 squares are selected the code executes */
    else if (selectedSquares.length >= 9)
    {
        // plays tie game audio
        audio('./media/draw_TryAgain.wav');
        // Sets a .3 second timer before the resetGame is called
        setTimeout(function () { resetGame(); }, 500);
    }

    // Checks if an array includes 3 strings and uses that to check each win condition
    function arrayIncludes(squareA, squareB, squareC)
    {
        // These 3 variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);

        /* If all 3 variables passed through are all included in the array then true is returned and 
        one of the else if conditions executes the drawLine() function */
        if (a === true && b === true && c === true) { return true; }
    }
}
//#endregion


// This function temporarily disables the players ability to click anything in the body
function disableClick()
{
    // This disables clicking the body
    body.style.pointerEvents = 'none';
    // This makes the body clickable again after 1 second
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

// This function takes a string parameter containing the path to the placememt audio('./media/place.mp3)
function audio(audioURL)
{
    // We create a new audio object & pass the path as a parameter
    let audio = new Audio(audioURL);
    // Play method to play the audio sound
    audio.play();
} 

//#region Canvas Drawing functions
// This function utilizes HTML canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2)
{
    // this line accesses out HTML canvas element
    const canvas = document.getElementById("win-lines");
    // This line gives us access to methods and properties to use on the canvas
    const c = canvas.getContext('2d');
    // This line indicates where the start of a lines x & y axis is
    let x1 = coordX1, y1 = coordY1,
    // This line indicates where the end of a lines x & y axis is
    x2 = coordX2, y2 = coordY2,
    // These variables store temporary x/ y axis data we update in our animation loop
    x = x1, y = y1;

    // This function interacts with the canvas
    function animateLineDrawing()
    {
        // This variable creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        // This method clears content from the last loop iteration 
        c.clearRect(0, 0, 608, 608);
        // This method starts a new path
        c.beginPath();
        // This method moves us to a starting point in our line
        c.moveTo(x1, y1);
        // This method indicates the end point in our line
        c.lineTo(x, y);
        // This sets the width of our line
        c.lineWidth = 10;
        // This sets the color
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        // This draws everything we laid out above
        c.stroke();
        // This condition checks if we've reached the endpoints
        if (x1 <= x2 && y1 <= y2)
        {
            // This condition adds 10 to the precious end x & y endpoint
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            // Similar to the above condition; This is necessary for the 6, 4, 2 win condition
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        // Similar to the above condition; This is necessary for the 6, 4, 2 win condition
        if (x1 <= x2 && y1 >= y2)
        {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    // This function clears our canvas after our win line is drawn
    function clear()
    {
        // This line starts our animation loop
        const animationLoop = requestAnimationFrame(clear);
        // This clears our canvas
        c.clearRect(0, 0, 608, 608);
        // This line stops our animation loop
        cancelAnimationFrame(animationLoop);
    }

    // Disables clicking while the win audio is playing
    disableClick();
    // Play win audio
    audio('./media/gameOver.wav');
    // This line calls our main animation loop
    animateLineDrawing();
    // This line waits 1 second, clears the canvas, resets the game and then allows clicking again
    setTimeout(function () { clear(); resetGame(); }, 1000);
}
//#endregion

// Reset game function whenever there is a win/ tie
function resetGame()
{
    // This for loop iterates through each HTML sqare element
    for (let i = 0; i < 9; i++)
    {
        // This variable gets the HTML element i
        let square = document.getElementById(String(i));
        // Removes our elements backgroundImage
        square.style.backgroundImage = '';
    }

    // This resets our array so it is empty and we can start over
    selectedSquares = [];
}
