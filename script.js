window.j = 0;
window.kool = 0;
window.namers = [];
window.num = 0
window.number = 0
var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey = data.val()
  var names = sessionStorage.getItem("name")
  if(names == null)
  {
  document.getElementById('id01').style.display='block';
  document.getElementById("namer").innerHTML = "";
  document.getElementById("namej").innerHTML = "";
  }
   window.namers.push(joey.name);
   if(names == window.namers[window.num])
   {
 window.identification = joey.ID  
 document.getElementById("names").innerHTML = names + "'s Planner"
 count()
  if(window.kool = 1){
 window.johnny = joey.classes;
 window.lengths = joey.classes.length
     homework();
   loadNotes() 
   }
  }
window.num ++
  });
window.how = [];
window.hw = [];
function homework()
{
 for(i=0; i<window.lengths; i++){

var playersRef = firebase.database().ref("Classes/" + window.identification + "/Homework/" + window.johnny[window.number]);
playersRef.on("child_added", function(data, prevChildKey) {
window.joey = data.val()



if(window.joey == "undefined")
{
window.how.push("No homework");

}
else
{
window.how.push(window.joey);
}

});
      var ref = firebase.database().ref("Classes/" + window.identification + "/Homework/" + window.johnny[window.number]);
ref.once("value")
  .then(function(snapshot) { 
alert(window.how[window.num]);;
 window.a = snapshot.exists();
 if(window.a == false)
 {
  window.hw.push("No homework");
   arr.splice(window.number, 0, "No homework");
 }
  else
  {

window.hw.push(window.how[window.number]);
 
  }
  alert(window.hw);
        }); 
    window.number += 1

  }

}
function count(){

 var ref = firebase.database().ref("Classes/" + window.identification + "/name");
ref.once("value")
  .then(function(snapshot) { 
  window.a = snapshot.exists();
 if(window.a == false)
 {
  location.href = "setClass" 
 }
 else if(window.a == true)
 {
window.kool = 1
 }
  });
}
function updateSave()
{

 var classers = firebase.database().ref("Classes/" + window.identification + "/Homework/" + window.hat);
 classers.update({
     homework: window.texter
});
}


function addNote(title, text) {
   var div = $("<div/>", {
        "class": "mdl-card mdl-shadow--2dp note"            
   });
    div.appendTo(".mdl-layout__content")
        
  title = title || window.johnny[window.j];
        
    var title_e = $("<div/>", {
        "class": "mdl-card__title" 
    });
    title_e.appendTo(div);
        
    var title_text = $("<input>", {
        "class": "mdl-card__title-text"
    });
    
    title_text.val(title);
    title_text.appendTo(title_e);
   

       text = text || window.hw[window.j]; 
    var sup_text = $("<div/>", {
        "class": "mdl-card__supporting-text",
        "contenteditable": ""
    });
    sup_text.html(text);
    sup_text.appendTo(div);
    
    var menu = $("<div/>", {
        "class": "mdl-card__menu" 
    });
    menu.appendTo(div);
    
    window.j += 1
     
    return {card: div, title: title, text: text};
  
}

window.classes = [];
window.numj = 0
function addAndSaveNote(title, text, index) {
 
    var note = addNote(title, text);
    window.obj = {
        title: note.title,
        text: note.text
    }
    window.classes.push(note.title)
     note.card.find(".mdl-card__title-text").on("input", function() {
        window.obj.title = $(this).val();
    });
        var onUp = function() {
      while(window.classes[window.numj] != note.title)
      {
    window.numj += 1
      }
       if(window.classes[window.numj] == note.title)
       {
         window.hat = note.title;
         window.texter = $(this).html();
         updateSave();
          window.numj = 0;
       }
       
     }
    note.card.find(".mdl-card__supporting-text").on("input", onUp); 
     note.onUp = onUp;
 
    return note;
    
}

function loadNotes() {
       for(i=0;i<window.lengths;i++){
       var note = addAndSaveNote();
        if(note)
     function load(item, index) {
                if(item)
                    addAndSaveNote(item.title, item.text, index); 
            };
       }
}
