var intro = "Step 1";
var Sent1 = "This is the beginning of the string";
var Sent2 = " and this is the end of the string";

// window alert to display Step 1
window.alert(intro);
// utilizing document.write to concatenate Sent1 & Sent2
document.write(Sent1 + Sent2);
// A statement containing the expression 300 / 50 
document.write(300 / 50);

/*  
var A = "This is a string";
var C = "assignment complete!";
var E = "Welcome to the party but who said \"YOU!\" could be here?";
var G = "All for one and one for all!" + " The valiant knights of the round table are at your service!";
var I = "Indigo", K = "Khaki", M = "Maroon", O = "Orange", Q = "Quartz";

// window alerts for the variables above
window.alert("Hello World!");
window.alert(C);
window.alert(E);
window.alert(G);

// Writing on the page with the variables above 
document.write("This is a test");
document.write(A);
document.write(M);
document.write(25 * 4); 
*/

function Get_Time_Function()
{
    document.getElementById("Get_Time_btn").innerHTML = Date();
}