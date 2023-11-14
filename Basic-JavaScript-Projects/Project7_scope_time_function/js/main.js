// Global variable 
var Dio = "The World";
function Stardust()
{
    var Jotaro = "Star Platinum";
    // utilizing Global Variable with a local variable 
    console.log(Dio + " vs. " + Jotaro);
}

//console.log(Dio + " vs. " + Jotaro); // fails as Jotaro is a local variable
Stardust();

function get_Date()
{
    if (new Date().getHours() < 21)
    {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

// Math function that just gagues which is greater with a random number selected
function get_Result()
{
    var problem1 = Math.random() * Math.random();
    var problem2 = Math.random() * Math.random();
    if (problem1 < problem2)
    {
        document.getElementById("Result").innerHTML = "It wasn't that big of a differance!"
    }
    else
    {
        document.getElementById("Result").innerHTML = "Oh... I guess it was bigger!"
    }
}

// Function to recieve input from user and respond after seeing how many shoes they have
function ShoeFunc()
{
    var Status, ShoeCount;
    ShoeCount = document.getElementById("ShoeCount").value;
    if (ShoeCount > 7)
    {
        Status = "You're a certified Sneaker Head";
    }
    else
    {
        Status = "That's a respectable amount of shoes";
    }
    // Like the previous age checker, ensuring the user enters a number before reporting the proper status
    document.getElementById("Shoe_Count").innerHTML = isNaN(ShoeCount) ? ShoeCount + " is not a number value" : Status;
}

// Time function to get the users time of day
function Time_Func()
{
    var Time = new Date().getHours();
    var Reply;

    if (Time < 12 == Time > 0)
    {
        Reply = "It's a beautiful morniiiiing~!";
    }
    else if (Time >= 12 == Time < 18)
    {
        Reply = "It's in the afternoo.";
    }
    else
    {
        Reply = "It's evening time."
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}