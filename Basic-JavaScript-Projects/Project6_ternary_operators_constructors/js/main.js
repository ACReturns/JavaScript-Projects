function RideFunc()
{
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Verify_Age_Func()
{
    var Age, Eligible;
    Age = document.getElementById("Age").value;
    Eligible = (Age < 18) ? "You're too young" : "You're old enough";
    document.getElementById("Eligible").innerHTML = isNaN(Age) ? "'" + Age + "'" + " is not a number" : Eligible + " to vote!";
}