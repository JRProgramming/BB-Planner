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
var Algebra4 = document.getElementById("Algebra4")
var EnglishD4 = document.getElementById("EnglishD4")
var Spanish4 = document.getElementById("Spanish4")
var SSB4 = document.getElementById("SSB4")
var Science6 = document.getElementById("Science6")
var Spanish6 = document.getElementById("Spanish6")
var EnglishT6 = document.getElementById("EnglishT6")
var AlgebraT6 = document.getElementById("AlgebraT6")
var EnglishT9 = document.getElementById("EnglishT9")
var PS9 = document.getElementById("PS9")
var SSB9 = document.getElementById("SSB9")
var AlgebraC9 = document.getElementById("AlgebraC9")
 if (english.checked == true)
 {
  englishd.checked = false
 }
 if (englishd.checked == true)
 {
 english.checked =  false
 }

 if(algC4.checked == true)
 {
  classes.push(algC4.value)
 }
 else
 {
  classes.push("None");
 }
   if (SocialS.checked == true)
 {
  classes.push(SocialS.value)
 }
 else
 {
  classes.push("None");
 }
  if (spanish.checked == true)
 {
  classes.push(spanish.value)
 }
  else
 {
  classes.push("None");
 }
 if (science.checked == true)
 {
  classes.push(science.value)
 }
  else
 {
  classes.push("None");
 }
 if (english.checked == true)
 {
  classes.push(english.value)
 }
else if (englishd.checked == true)
{
 classes.push(englishd.value)
}
   else
 {
  classes.push("None");
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

