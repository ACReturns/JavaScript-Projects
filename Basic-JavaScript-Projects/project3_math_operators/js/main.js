function additionFunc()
{
    // Gets the value assigned from the additional example
    var addition = 5 + 5;
    document.getElementById("Math_add").innerHTML = "5 + 5 = " + addition;
}

function subtractFunc()
{
    // Gets the value assigned from the subtraction example
    var subtraction = 10 - 9;
    document.getElementById("Math_subtract").innerHTML = "10 - 9 = " + subtraction; 
}

function multiplyFunc()
{
    // Gets the value assigned from the multiplication example
    var multiply = 25 * 4;
    document.getElementById("Math_multiply").innerHTML = "25 * 4 = " + multiply;
}

function divideFunc()
{
    // Gets the value assigned from the division example
    var divide = 200 / 20;
    document.getElementById("Math_divide").innerHTML = "200 / 20 = " + divide; 
}

function math_All()
{
    // calculate multiple problems at once 
    var equate_Math = (5 + 2) * 10 / 2 - 5;
    document.getElementById("All_Together").innerHTML = "5 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + equate_Math;
}

function modulusFunc()
{
    // Get the remainding value after dividing 2 numbers
    var modulus = 25 % 6;
    document.getElementById("Math_Modulus").innerHTML = "When you divide 25 by 6 you have a remainer of: " + modulus; 
}

function negationFunc()
{
    // Turn a positive value into a negative
    var negation = -10;
    document.getElementById("Math_Negation").innerHTML = "What's the opposite of positive 10: " + negation;
}

function incrimentFunc()
{
    // adding 1 to go up to 26
    var X = 25;
    X++;
    document.getElementById("Math_Incriment").innerHTML = "Adding one from 25 = " + X;
}

function decrimentFunc()
{
    // count down by 1 to get 6.77
    var X = 7.77;
    X--;
    document.getElementById("Math_Decriment").innerHTML = "Removing 1 from 7.77 = " + X;
}

function randomFunc()
{
    // utilizing Math.floor to get a whole number versus a decimal number between 1 - 100
    var newNumber = Math.floor(Math.random() * 100) + 1;;
    document.getElementById("Math_Random").innerHTML = "The new number is = " + newNumber;
}

//window.alert(Math.PI);