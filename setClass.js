
function logClasses()
{
 document.getElementById("heading").innerHTML = "Sup Johnny" 
 var playersRef = firebase.database().ref("Classes/");
 var algC4 = document.getElementById("AlgebraC")
 if(algC4.checked == true)
 {
  alert("selected")
 }
 playersRef.push({
   Classes: { 
      classes: "Joe"
   }
});
}
