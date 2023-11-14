// Ternary Functions
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
    // Confirming the user utilized a number instread of any text before reporting the result
    document.getElementById("Eligible").innerHTML = isNaN(Age) ? "'" + Age + "'" + " is not a number" : Eligible + " to vote!";
}
// Ternary Functions End

// Constructors
function Vehicle(Make, Model, Year, Color)
{
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White & Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunc()
{
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored "
    + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Suits(Color, Occasion, Order)
{
    this.Suits_Color = Color;
    this.Suits_Occasion = Occasion;
    this.Suits_Order = Order;
}

var Ryan = new Suits("Grey", "Wedding", "Rented");
var Lianne = new Suits("Purple", "Fancy Friday", "Purchased");
var Vernon = new Suits("White", "No Reason", "Walk-in");

function myNewFunc()
{
    document.getElementById("New_and_This").innerHTML = "Lianne is coming to the office soon in her " + Lianne.Suits_Color +
    " colored suit. She's really prepared for " + Lianne.Suits_Occasion;
}
// Constructors End

// Nested Functions
function count_Func()
{
    document.getElementById("Counting").innerHTML = Count();
    function Count()
    {
        var Starting_point = 9;
        function Plus_one() 
        {
            Starting_point += 1;
        }

        Plus_one();
        return Starting_point;
    }
}

function nesting_Func()
{
    document.getElementById("Nested_Function").innerHTML = Words();
    function Words()
    {
        var mascotName = "Ronald";
        function concat()
        {
            mascotName += " McDonald"
        }

        concat();
        return mascotName;
    }
}
// Nested Functions End