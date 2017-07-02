function logClasses()
{
 var classers = firebase.database().ref("Classes/");
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
   if (SocialS.checked == true)
 {
  classes.push(SocialS.value)
 }
  if (spanish.checked == true)
 {
  classes.push(spanish.value)
 }
 if (science.checked == true)
 {
  classes.push(science.value)
 }
 if (english.checked == true)
 {
  classes.push(english.value)
 }
if (englishd.checked == true)
{
 classes.push(englishd.value)
}
classes.push("Specials")
 classers.push({
      classes: classes
});
 var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
   var newPlayer = data.val()
   if (newPlayer.classes != "")
   {
    location.href = "jrprogramming.github.io/BB-Planner"
   }
   })
   
}
function UnCheck(obj) {
    var eng = document.getElementsByClassName("english");
    for (var i = 0; i < eng.length; i++) {
        eng[i].checked = false;
    }
    obj.checked = true;
}

