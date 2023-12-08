function validateForm()
{
    let x = document.forms["phoneForm"]["name"].value;
    let y = document.forms["phoneForm"]["phone_number"].value;

    if (x == "" || y == "")
    {
        alert("Name and Phone number must be filled out");
        return false;
    }
}

function openForm()
{
    document.getElementById("myForm").style.display = "block";
}

function closeForm()
{
    document.getElementById("myForm").style.display = "none";
}