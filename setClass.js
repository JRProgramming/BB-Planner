function logClasses()
{
 document.getElementById("heading").innerHTML = "Sup Johnny" 

    var class = []
    var algC1 = document.getElementById("AlgebraC")
    var ss = document.getElementById("SSG")
    var spa = document.getElementById("SpanishH")
 if(algC1.checked)
  {
   alert("Algebra")
    class.push(alg1)
  }
 if(ss.checked)
 {
    class.push(ss)
 }
 if(spa.checked)
 {
    class.push(spa)
 }
 var playersRef = firebase.database().ref("Classes/");
 playersRef.push({
   Message: { 
      classes: class
   }
});
}
