//This variable kepps track of whos turn it is
let activePlayer = 'X';
// This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

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
            select.style.backgroundImage = 'url("images/x.png")';
            //Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
        }
        else
        {
            //If activePlayer is equal to 'O', the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/o.png")';
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
        audio('./media/place.mp3');
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
            audio('./media/tie.mp3');
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

    // This function temporarily disables the players ability to click anything in the body
    function disableClick()
    {
        // This disables clicking the body
        ReportBody.style.pointerEvents = 'none';
        // This makes the body clickable again after 1 second
        setTimeout(function () { ReportBody.Style.pointerEvents = 'auto'; }, 1000);
    }

    // This function takes a string parameter containing the path to the placememt audio('./media/place.mp3)
    function audio(audioURL)
    {
        // We create a new audio object & pass the path as a parameter
        let audio = new Audio(audioURL);
        // Play method to play the audio sound
        audio.play();
    } 
}
