function logClasses()
{
 document.getElementById("heading").innerHTML = "Sup Johnny" 
 if(document.getElementById("AlgebraC").checked)
    {
    var joe = document.getElementById("AlgebraC").innerHTML
    alert(joe)
    }
 var playersRef = firebase.database().ref("Classes/");
 playersRef.push({
   Message: { 
      classes: joe
   }
});
}
