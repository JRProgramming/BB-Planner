var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey = data.val()
  var names = sessionStorage.getItem("name")
 var nameS = sessionStorage.getItem("nameS");
   if(joey.name == names)
   {
alert(joey.classes);
   }
   if(joey.name == nameS)
   {
    alert(joey.classes)  
   }
  });
