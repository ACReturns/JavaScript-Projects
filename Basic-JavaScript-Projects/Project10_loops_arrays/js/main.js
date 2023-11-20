//#region  While loop
var comboCounter = 0;

function Call_Loop()
{
    while (comboCounter < 12)
    {
        comboCounter++;
    }
    document.getElementById("Loop").innerHTML = comboCounter;
}
//#endregion

//#region Text Length
function Get_Length_Func()
{
    var userInput = document.getElementById("Text_Count").value;
    document.getElementById("Text_Length").innerHTML = userInput.length;
}
//#endregion

//#region For loop
var Instruments = ["Flute", "Violin", "Piano", "Harp", "Drums", "Guitar", "Trumpet"]
var Inventory = "";

function forLoop()
{
    for (var i = 0; i < Instruments.length; i++)
    {
        Inventory += Instruments[i] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Inventory;
}
//#endregion

//#region Array
function array_Func()
{
    var boroughs = [];
    boroughs[0] = "Manhatten";
    boroughs[1] = "Staten Island";
    boroughs[2] = "Queens";
    boroughs[3] = "Brooklyn";
    boroughs[4] = "Bronx";


    document.getElementById("Array").innerHTML = "From " + boroughs[1] + 
    " to the " + boroughs[4] + ", New York has a blend of everything.";
}
//#endregion

//#region Constant
function constant_Func()
{
    const laserGun = {Model:"Moonraker", Maker:"Drax Industries", Owner:"Drax Henchmen"};
    laserGun.Owner = "James Bond";
    laserGun.Creator = "Hugo Drax";

    document.getElementById("Constant").innerHTML = laserGun.Owner + " knocked out the henchmen and took the " + laserGun.Model
    + " before making his way to face off against " + laserGun.Creator;
}
//#endregion

//#region Let
function let_Func()
{
    var turtles = "Shell";
    document.write(turtles);
    {
        let turtles = "Green";
        document.write(turtles);
    }
    document.write(turtles);
}
//#endregion

//#region Return statement
document.getElementById("Return").innerHTML = return_Func(document.getElementById("UserEntry").value)

function return_Func(entry)
{
    return "Hi " + entry;
}
//#endregion