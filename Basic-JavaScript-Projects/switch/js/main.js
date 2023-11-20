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