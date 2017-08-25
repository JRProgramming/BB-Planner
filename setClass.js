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
var EnglishD1 = document.getElementById("EnglishD1")
var EScience1 = document.getElementById("ES1")
var Math81 = document.getElementById("Math81")
var PScience3 = document.getElementById("PS3")
var EScience3 = document.getElementById("ES3")
var SocialSL3 = document.getElementById("SSL3")
var EnglishT3 = document.getElementById("ET3")
var Italian3 = document.getElementById("Italian3")
var AlgebraC4 = document.getElementById("Algebra4")
var EnglishD4 = document.getElementById("EnglishD4")
var Spanish4 = document.getElementById("Spanish4")
var SocialSB4 = document.getElementById("SSB4")
var EScience6 = document.getElementById("Science6")
var Spanish6 = document.getElementById("Spanish6")
var EnglishT6 = document.getElementById("EnglishT6")
var AlgebraT6 = document.getElementById("AlgebraT6")
var EnglishT9 = document.getElementById("EnglishT9")
var PScience9 = document.getElementById("PS9")
var SocialSB9 = document.getElementById("SSB9")
var AlgebraC9 = document.getElementById("AlgebraC9")
 if(Spanish1.checked == true)
 {
  classes.push(Spanish1.value)
 }
   if (EnglishD1.checked == true)
 {
  classes.push(EnglishD1.value)
 }
  if (EScience1.checked == true)
 {
  classes.push(EScience1.value)
 }
  if (Math81.checked == true)
 {
  classes.push(Math81.value)
 }
 if (PScience3.checked == true)
 {
  classes.push(PScience3.value)
 }
 if (EScience3.checked == true)
 {
  classes.push(EScience3.value)
 }
 if (SocialSL3.checked == true)
 {
  classes.push(SocialSL3.value)
 }
 if (EnglishT3.checked == true)
 {
  classes.push(EnglishT3.value)
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
 if (SocialSB4.checked == true)
 {
  classes.push(SocialSB4.value)
 }
 if (EScience6.checked == true)
 {
  classes.push(EScience6.value)
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
 if (PScience9.checked == true)
 {
  classes.push(PScience9.value)
 }
 if (SocialSB9.checked == true)
 {
  classes.push(SocialSB9.value)
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

