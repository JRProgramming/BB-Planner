window.numb = 0
window.kh = 0
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
if(window.lclass != undefined && window.fclass != undefined)
{
  if(window.kh == 0)
  {
  for(i=0;i<window.fclass.length;i++)
 {
if(window.fclass[window.numb] == window.lclass[window.numb] )
{
window.array.push(window.fclass[window.numb])
  console.log(window.array)
}
window.numb += 1
}
    window.kh += 1
  }
}
}
