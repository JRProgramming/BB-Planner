function logClasses()
{
 document.getElementById("heading").innerHTML = "Sup Johnny" 
 if(document.getElementById("AlgebraC").checked)
    {
     alert("HOORAY")
    var joe = document.getElementById("AlgebraC").innerHTML
    }
 var playersRef = firebase.database().ref("Classes/");
 playersRef.push({
   Message: { 
      classes: joe
   }
});
}
