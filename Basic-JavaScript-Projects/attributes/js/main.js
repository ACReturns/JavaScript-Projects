function displayFood(produce)
{
    var foodItem = produce.getAttribute("data-food_items");
    alert(produce.innerHTML + " is a delicious " + foodItem);
}