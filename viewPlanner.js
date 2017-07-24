var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey = data.val()
  var names = sessionStorage.getItem("name")
  alert(names)
 var nameh = sessionStorage.getItem("nameS");
  alert(nameh);
   if(joey.name == names)
   {
alert(joey.classes);
   }
   if(joey.name == nameS)
   {
    alert(joey.classes)  
   }
  });
