function dictionaryFunc()
{
    var Controller =
    {
        Model: "Hori",
        Type: "Arcadestick",
        Color: "White",
        Wireless: "No",
        ButtonLayout: "8 Buttons"
    }

    delete Controller.Wireless;
    document.getElementById("Dictionary").innerHTML = Controller.Wireless;
}