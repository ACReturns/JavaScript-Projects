//#region Switch statement
function Console_Select_Func(console)
{
    var Console_Output;
    var selectedConsole = console;
    var choiceFlavor = " was a pretty amazing console!";

    switch(selectedConsole)
    {
        case "PS2":
            {
                Console_Output = selectedConsole + choiceFlavor;
            }
        case "Xbox":
            {
                Console_Output = selectedConsole + choiceFlavor;
            }
        case "Dreamcast":
            {
                Console_Output = selectedConsole + choiceFlavor;
            }
        case "Sega Saturn":
            {
                Console_Output = selectedConsole + choiceFlavor;
            }
        case "Wii":
            {
                Console_Output = selectedConsole + choiceFlavor;
            }
        case "NeoGeo":
            {
                Console_Output = selectedConsole + choiceFlavor;
            }
    }

    document.getElementById("Output").innerHTML = Console_Output;
}
//#endregion

//#region Get class element
function Foam_Function()
{
    var color = document.getElementsByClassName("Foam");
    color[0].innerHTML = "Changed to Yellow!";
}
//#endregion

//#region Canvas art
// Properties
var canvas = document.getElementById("Canvas");
var drawContext = canvas.getContext("2d");

// Draw a circle
drawContext.beginPath();
drawContext.arc(80, 70, 60, 0, 2 * Math.PI);
drawContext.stroke();

// Gradient fill
var gradientColor = drawContext.createLinearGradient(0, 100, 200, 0);
gradientColor.addColorStop(0, "green");
gradientColor.addColorStop(1, "orange");
drawContext.fillStyle = gradientColor;
drawContext.fillRect(140, 100, 200, 90);
//#endregion