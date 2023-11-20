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
function return_Func()
{
    return document.getElementById("Return").innerHTML = "2 + 2 = " + (2 + 2);
}
//#endregion

//#region object with properties/ method
let phone =
{
    make: "Samsung",
    model: "ZFlip 3",
    color: "Green",
    release: "August 11, 2021",
    review: function()
    {
        return "While the " + phone.make + " " + phone.model + " was released in " + phone.release + ", it's still a worhwhile phone to have."; 
    }
};
document.getElementById("Phone").innerHTML = phone.review();
//#endregion

//#region Break/ Continue
function batteryFunc()
{
    for (let i = 0; i < 10; i++)
    {
        if (i < 2)
        {
            document.write("Batter low, charging...<br>");
            continue;
        }
        if (i < 5)
        {
            document.write("Battery half charged...<br>")
            continue;
        }
        if (i < 9)
        {
            document.write("Battery almost done charging...<br>")
            continue;
        }
        if ( i >= 9)
        {
            document.write("Fully charged!")
            break;
        }
    }
}
//#endregion