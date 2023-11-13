document.write(typeof "Word");
document.write(typeof 5);
document.write(2E310);
document.write(-3E310);

function myFunc()
{
    document.getElementById("Test1").innerHTML = 0/0;
}

function nanCheck()
{
    document.getElementById("Test2").innerHTML = isNaN("This is a string");
}

function positiveFunc()
{
    document.getElementById("Positive").innerHTML = 5E555;
}

function negativeFunc()
{
    document.getElementById("Negative").innerHTML = -4E454;
}

function boolFunc()
{
    document.getElementById("Boolean").innerHTML = 100 < 99;
}

function notFunc()
{
    document.getElementById("Not").innerHTML = !(11 > 10);
}

console.log(5 + 25);
console.log(2 >= 4);
console.log((2 + 2) == 4);
console.log(2 != 2);

var compareV = 1;
var compareW = 20;
var compareX = 20;
var compareY = "20";
var compareZ = "Twenty";

console.log(compareX == compareY);
console.log(compareX === compareW);
console.log(compareX === compareY);
console.log(compareX === compareZ);
console.log(compareX === compareV);

document.write(7 > 14 || 11 < 13);
document.write( 23 > 50 || -5 > 5);
document.write(5 > 2 && (1 + 1) > 1);
document.write(22 < 3 && 7 > 11);