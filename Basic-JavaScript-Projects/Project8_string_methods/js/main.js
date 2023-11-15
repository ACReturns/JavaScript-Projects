function full_Sentence()
{
    var piece_1 = "Peter Piper ";
    var piece_2 = "picked a ";
    var piece_3 = "peck of ";
    var piece_4 = "Pickled Pepers";
    var complete_Sentence = piece_1.concat(piece_2, piece_3, piece_4);
    document.getElementById("Concat").innerHTML = complete_Sentence;
}

function slice_Method()
{
    var Sentence = "The walls in the mall are totally totally tall";
    var Section = Sentence.slice(26, 34);
    document.getElementById("Slice").innerHTML = Section;
}

function uppercase_Method()
{
    var userInput = document.getElementById("Uppercast_Text").value;
    document.getElementById("Upper_output").innerHTML = userInput.toUpperCase();
}

function string_Method()
{
    var X = 525;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method()
{
    var X = 50597.4592114965325;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function toFixed_Method()
{
    var Cash = 27.49034
    document.getElementById("ToFixed").innerHTML = Cash.toFixed(2);
}

function valueOf_Method()
{
    var output = "Same thing";
    document.getElementById("ValueOf").innerHTML = output.valueOf();
}