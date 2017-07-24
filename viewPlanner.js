window.numb = 0
window.lclass = [];
window.fclass = [];
var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey = data.val()
  var names = sessionStorage.getItem("name")
 var nameS = sessionStorage.getItem("nameS");
   if(joey.name == names)
   {
window.lclass = joey.classes
   }
   if(joey.name == nameS)
   {
window.fclass = joey.classes
   }
  match()
  });
function match()
{
  console.log(window.lclass)
  console.log(window.fclass);
if(window.lclass != [] && window.fclass != [])
{

 for(i=0;i<window.fclass.length + 1;i++)
 {

if(window.fclass[window.numb] == window.lclass[window.numb] )
{

   
}
window.numb += 1
}
}
}
