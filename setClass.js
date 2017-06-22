src="https://www.gstatic.com/firebasejs/4.1.3/firebase.js"
var config = {
    apiKey: "AIzaSyAPZwtE0Luy_umjawZcUXr5VbBeDlUvrlo",
    authDomain: "bbclassmatch.firebaseapp.com",
    databaseURL: "https://bbclassmatch.firebaseio.com",
    projectId: "bbclassmatch",
    storageBucket: "bbclassmatch.appspot.com",
    messagingSenderId: "984402365769"
  };
firebase.initializeApp(config);
function logClasses()
{
 if(document.getElementById("AlgebraC").checked)
 {
 var alg = document.getElementById("AlgebraC").innerHTML
}
 document.getElementById("heading").innerHTML = "Sup Johnny" 
 var playersRef = firebase.database().ref("Classes/");
 playersRef.push({
   Message: { 
      classes: alg
   },
});
}
