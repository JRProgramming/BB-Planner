window.onload = function()
{
var name = sessionStorage.getItem("v")
document.getElementById("h1").innerHTML = "Welcome " + name
document.getElementById("h3").innerHTML = "Your email hasn't been verified yet. Please check the email we sent you in your email account and follow the directions to verify your email." + "<br>"
document.getElementById("h3").innerHTML = "One you have verify your email, click the button below."
}
function home()
{
 location.href="https://jrprogramming.github.io/BB-Planner/"
}
