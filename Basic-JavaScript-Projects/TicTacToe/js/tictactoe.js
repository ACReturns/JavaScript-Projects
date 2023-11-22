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
    }
}
