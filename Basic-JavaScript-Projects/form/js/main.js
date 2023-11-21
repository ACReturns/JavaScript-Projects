function validateForm()
{
    let userName = document.forms["testForm"]["login"].value;
    let userPassword = document.forms["testForm"]["password"].value;

    if (userName == "" || userPassword == "")
    {
        alert("All areas are not filled out");
        return false;
    }
}