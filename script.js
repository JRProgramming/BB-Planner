window.j = 0;
window.kool = 0;
window.namers = [];
window.green = [];
var texter = [];
var yo = 0;
var bo = 0;
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
    for(i=0;i<window.lengths;i++)
{
if(window.johnny[i] != "None")
{
 window.green.push(window.johnny[i]);
}
}
 if(window.lengths == 0)
 {
location.href = "setClass"
 }
     homework();
   loadNotes() 
   }
  }
window.num ++
  });
window.hw = [];
function homework()
{
for(i=0;i<window.lengths;i++)
{
var playersRef = firebase.database().ref("Classes/" + window.identification + "/Homework/"+ window.johnny[i]);
playersRef.on("child_added", function(data, prevChildKey) {
  var joey =  data.val()
  if(joey != "None")
  {
  window.hw.push(joey);
  }
})
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
 var classers = firebase.database().ref("Classes/" + window.id + "/Homework/" + window.hat);
 classers.update({
     homework: window.texter
});
}


function addNote(title, text) {
   var div = $("<div/>", {
        "class": "mdl-card mdl-shadow--2dp note"            
   });
    div.appendTo(".mdl-layout__content")
        
  title = title || window.green[window.j];
        
    var title_e = $("<div/>", {
        "class": "mdl-card__title", 
        "contenteditable": "false"
    });
    title_e.appendTo(div);
        
    var title_text = $("<input>", {
        "class": "mdl-card__title-text",
        "contenteditable": "false"
    });
    
    title_text.val(title);
    title_text.appendTo(title_e);
   

       text = text || window.hw[window.j]; 
    var sup_text = $("<div/>", {
        "class": "mdl-card__supporting-text",
        "contenteditable": "false"
    });
  
    sup_text.html(text);
    sup_text.appendTo(div);
   var textfield_j = $("<div/>", {
    "class": "mdl-card__actions mdl-card--border",
     "contenteditable": "",
     "placeholder": "Type down your homework here"
  }); 
  textfield_j.appendTo(div);
 
   
  
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
  
      
        
   
 
  note.card.find(".mdl-card__actions.mdl-card--border").on("keydown", function (e) {
    if(e.keyCode === 13)
    {
       while(window.classes[window.numj] != note.title)
      {
    window.numj += 1
      }
       if(window.classes[window.numj] == note.title)
       {
         window.hat = note.title;
         window.texter = [];
        var playersRef = firebase.database().ref("Classes/" + window.identification + "/Homework/"+ window.hat + "/homework");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey =  data.val()
  window.texter.push(joey);
  console.log(window.texter)
         window.texter.push("<input type=\"checkbox\">" + $(this).html() + "<br>")
         note.card.find(".mdl-card__supporting-text").html("");
         updateSave();
         console.log(window.texter);
         note.card.find(".mdl-card__supporting-text").html(window.texter)
         $(this).html("")
          window.numj = 0;
         yo += 1
         })
       } 
    }
  })

 
    return note;
    
}




function homepage()
{
location.href = "index.html";
}
function loadNotes() {
    window.id = window.identification
       for(i=0;i<window.green.length;i++){
       var note = addAndSaveNote();
        if(note)
     function load(item, index) {
                if(item)
                    addAndSaveNote(item.title, item.text, index); 
            };
       }
}
