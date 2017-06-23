
function logClasses()
{
 document.getElementById("heading").innerHTML = "Sup Johnny" 
 var playersRef = firebase.database().ref("Classes/");
 if(document.getElementById("AlgebraC").checked == true)
 {
  alert("selected")
 }
 playersRef.push({
   Classes: { 
      classes: "Joe"
   }
});
}
