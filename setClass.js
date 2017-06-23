function logClasses()
{
 document.getElementById("heading").innerHTML = "Sup Johnny" 

    var class = []
    var algC1 = document.getElementById("AlgebraC")
    var ss = document.getElementById("SSG")
    var spa = document.getElementById("SpanishH")



 

 var playersRef = firebase.database().ref("Classes/");
 playersRef.push({
   Message: { 
      classes: "joe"
   }
});
}
