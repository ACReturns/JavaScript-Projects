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