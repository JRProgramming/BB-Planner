window.onload = function()
{
var name = sessionStorage.getItem("v")
document.getElementById("h1").innerHTML = "Welcome " + name
document.getElementById("h3").innerHTML = "Your email hasn't been verified, please verify your email address." + "<br>"
document.getElementById("h3").innerHTML = "When you verify your email, click the button below"
}
function home()
{
 location.href="https://jrprogramming.github.io/BB-Planner/"
}
