
function logClasses()
{
 document.getElementById("heading").innerHTML = "Sup Johnny" 
 var classers = firebase.database().ref("Classes/");
 var classes = []
 var algC4 = document.getElementById("AlgebraC");
  var SocialS = document.getElementById("SSG");
 var spanish = document.getElementById("SpanishH");
 var science = document.getElementById("ScienceH");
 var english = document.getElementById("EnglishT");

 if(algC4.checked == true)
 {
  classes.push(algC4.value)
 }
   if (SocialS.checked == true)
 {
  classes.push(SocialS.value)
 }


 classers.push({
      classes: classes
   
});
}
