
function logClasses()
{
 document.getElementById("heading").innerHTML = "Sup Johnny" 
 var playersRef = firebase.database().ref("Classes/");
 var class = []
 var algC4 = document.getElementById("AlgebraC")
 if(algC4.checked == true)
 {
  class.push(algC4.value)
 }
 playersRef.push({
   Classes: { 
      classes: class
   }
});
}
