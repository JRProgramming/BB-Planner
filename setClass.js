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
 var algC4 = document.getElementById("AlgebraC");
 var SocialS = document.getElementById("SSG");
 var spanish = document.getElementById("SpanishH");
 var science = document.getElementById("ScienceH");
 var english = document.getElementById("EnglishT");
 var englishd = document.getElementById("EnglishD");
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
    var eng = document.getElementsByClassName("english");
    for (var i = 0; i < eng.length; i++) {
        eng[i].checked = false;
    }
    obj.checked = true;
}

