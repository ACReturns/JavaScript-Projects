//#region input countdown
function countdown()
{
    var seconds = document.getElementById("seconds").value;

    function tick()
    {
        seconds = seconds - 1;
        document.getElementById("timer").innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1)
        {
            alert("Time's up!");
            clearTimeout(time);
            document.getElementById("timer").innerHTML = "";
        }
    }
    tick();
}
//#endregion

//#region image slideshow countdown
let slideIndex = 0;
showSlides();

function showSlides()
{
    // get the amount of images to cycle through
    let slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length)
    {
        slideIndex = 1;
    }

    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 1000); // Change every seconds
}
//#endregion