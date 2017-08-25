var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
 var joey = data.val();
 var data = localStorage.getItem("name")
 window.names = joey.name
 if(localStorage.getItem("name") == null)
  {
location.href = "https://jrprogramming.github.io/BB-Planner"
  }
if(data == window.names)
{
 window.identification = joey.ID
}
 
});
function logClasses()
{
 var classers = firebase.database().ref("Classes/" + window.identification);
 var classes = []
var Spanish1 = document.getElementById("Hellman1")
var EnglishD1 = document.getElementById("EngilshD1")
var ES1 = document.getElementById("ES1")
var Math81 = document.getElementById("M81")
var PS3 = document.getElementById("PS3")
var ES3 = document.getElementById("ES3")
var SSL3 = document.getElementById("SSL3")
var ET3 = document.getElementById("ET3")
var Italian3 = document.getElementById("Italian3")
var AlgebraC4 = document.getElementById("Algebra4")
var EnglishD4 = document.getElementById("EnglishD4")
var Spanish4 = document.getElementById("Spanish4")
var SSB4 = document.getElementById("SSB4")
var ES6 = document.getElementById("Science6")
var Spanish6 = document.getElementById("Spanish6")
var EnglishT6 = document.getElementById("EnglishT6")
var AlgebraT6 = document.getElementById("AlgebraT6")
var EnglishT9 = document.getElementById("EnglishT9")
var PS9 = document.getElementById("PS9")
var SSB9 = document.getElementById("SSB9")
var AlgebraC9 = document.getElementById("AlgebraC9")
 if(Spanish1.checked == true)
 {
  classes.push(Spanish1.value)
 }
   if (EnglishD1.checked == true)
 {
  classes.push(EnglishD1.value)
 }
  if (ES1.checked == true)
 {
  classes.push(ES1.value)
 }
  if (Math81.checked == true)
 {
  classes.push(Math81.value)
 }
 if (PS3.checked == true)
 {
  classes.push(PS3.value)
 }
 if (ES3.checked == true)
 {
  classes.push(ES3.value)
 }
 if (SSL3.checked == true)
 {
  classes.push(SSL3.value)
 }
 if (ET3.checked == true)
 {
  classes.push(ET3.value)
 }
 if (AlgebraC4.checked == true)
 {
  classes.push(AlgebraC4.value)
 }
 if (EnglishD4.checked == true)
 {
  classes.push(EnglishD4.value)
 }
 if (Spanish4.checked == true)
 {
  classes.push(Spanish4.value)
 }
 if (SSB4.checked == true)
 {
  classes.push(SSB4.value)
 }
 if (ES6.checked == true)
 {
  classes.push(ES6.value)
 }
 if (Spanish6.checked == true)
 {
  classes.push(Spanish6.value)
 }
 if (EnglishT6.checked == true)
 {
  classes.push(EnglishT6.value)
 }
 if (AlgebraT6.checked == true)
 {
  classes.push(AlgebraT6.value)
 }
 if (EnglishT9.checked == true)
 {
  classes.push(EnglishT9.value)
 }
 if (PS9.checked == true)
 {
  classes.push(PS9.value)
 }
 if (SSB9.checked == true)
 {
  classes.push(SSB9.value)
 }
 if (AlgebraC9.checked == true)
 {
  classes.push(AlgebraC9.value)
 }
classes.push("Specials")
 classers.update({
     name: window.names,
     classes: classes
});

for(i=0;i<classes.length;i++)
{
  var classers = firebase.database().ref("Classes/" + window.identification + "/Homework/" + classes[i]);
 classers.update({
     homework: "No homework"
});
}
 

     var bob = firebase.database().ref("Completion/")
       bob.set("Data is stored", function(error) {
  if (error) {
    alert("Classes failed to register, please try again.");
  } else {
   location.href = "index.html";
  }
}); 
 
}
function UnCheck(obj) {
    var first = document.getElementsByClassName("first");
    var third = document.getElementsByClassName("third")
    var fourth = document.getElementsByClassName("fourth")
    var sixth = document.getElementsByClassName("sixth")
    var ninth = document.getElementsByClassName("ninth")
    
    for (var i = 0; i < eng.length; i++) {
        eng[i].checked = false;
    }
    obj.checked = true;
}

