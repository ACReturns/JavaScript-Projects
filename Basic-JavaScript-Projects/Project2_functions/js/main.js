document.write("What is 2 + 2?");

function answerQuestion()
{
    // checks if the selected button is the correct button or not
    if (document.activeElement == document.getElementById("correct_btn"))
    {
        document.write("Correct! You get a gold star");
    }
    else
    {
        document.write("Incorrect, better luck next time");
    }
}

function concatOriginal()
{
    // concat the string the original way
    var Object1 = "Autobots ";
    var Object2 = "Rollout!";
    var motto = Object1 + Object2;    
    document.getElementById("body_area1").innerHTML = motto;
}

function concatOperator()
{
    // utilizing += to concat the string
    var Object3 = "Cowa";
    Object3 += "bunga!";
    document.getElementById("body_area2").innerHTML = Object3;
}