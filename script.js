var suptext = null
window.j = 0;
window.kool = 0;
window.namers = [];
window.green = [];
var texter = [];
 var yu = []
var yo = 0;
var bo = 0;
window.num = 0
window.number = 0
var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey = data.val()
  var names = localStorage.getItem("name")
  if(names == null)
  {
  document.getElementById('id01').style.display='block';
  start()
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
 signal()
  });
window.hw = [];
function signal()
{
var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey = data.val()
  if(localStorage.getItem("name") == joey.name)
  {
    window.identification = joey.ID
    if(joey.Request != undefined)
    {

window.names = joey.Request
  if(window.names.length != 0)
  {
document.getElementById("access").innerHTML = "See other planners (" + window.names.length + ")"
  }
    
    }
  }
  });

}
function homework()
{
for(i=0;i<window.lengths;i++)
{
var playersRef = firebase.database().ref("Classes/" + window.identification + "/Homework/"+ window.johnny[i]);
playersRef.on("child_added", function(data, prevChildKey) {
  var joey =  data.val()
 if(joey != "None" )
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
        
    var title_text = $("<div/>", {
        "class": "mdl-card__title-text",
        "contenteditable": "false"
    });
    
    title_text.html(title);
    title_text.appendTo(title_e);
   

       text = text || window.hw[window.j]; 
    var sup_text = $("<div/>", {
        "class": "mdl-card__supporting-text",
        "contenteditable": "false"
    });
  
    sup_text.html(text);
    sup_text.appendTo(div);
   var textfield_j = $("<input/>", {
    "class": "mdl-card__actions mdl-card--border",
     "contenteditable": "",
     "placeholder": "Type down your homework here"
  }); 
  textfield_j.appendTo(div);
 var button_j = $("<div/>", {
  "class": "mdl-card__supporting-text",
  "contenteditable": "false"
  
 })
 
   
  
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
 
 note.card.find(".mdl-card__supporting-text").on("click", function(){
   window.hat = note.title;
      var playersRef = firebase.database().ref("Classes/" + window.id + "/Homework/"+ window.hat);
playersRef.on("child_added", function(data, prevChildKey) {
 var joey = data.val()
 if(joey == "No homework")
 {
joey = []
 }
 window.lengthj = joey.length
})
        var tyr = 0;
        var classes = note.title
        if(classes == "Social Studies")
        {
        classes = "Social_Studies"
        }
        for(i=0;i<window.lengthj;i++)
        {
        if(document.getElementById(note.title + i).checked == true)
        {
        tyr ++
        }
        }
        if(tyr == window.lengthj)
        {
        note.card.find(".mdl-card__title-text").html(note.title + "<a class=\"clearbutton\" id=\"" + classes + "buttonx\" onclick=\"clearHW()\">Clear HW</a>")
        }
        else
        {
          $("#" + classes + "buttonx").remove()
        }
 });

 function clearHW()
 {
alert("Hello World!");
  
 }
  
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
        window.texter = []
        var playersRef = firebase.database().ref("Classes/" + window.id + "/Homework/"+ window.hat);
playersRef.on("child_added", function(data, prevChildKey) {
 var joey = data.val()
 if(joey == "No homework")
 {
joey = []
 }
 window.texter = joey
 
})

        window.lengthj = window.texter.length
        var j = note.title + window.lengthj
        if(note.card.find(".mdl-card__supporting-text").html() != "No homework")
        {
         note.card.find(".mdl-card__supporting-text").append("<input type=\"checkbox\" id=" + j + ">" + $(this).val() + "<br>")
        }
        else
        {
         note.card.find(".mdl-card__supporting-text").html("<input type=\"checkbox\" id=" + j + ">" + $(this).val() + "<br>")
        }
         
    window.texter.push("<input type=\"checkbox\" id=\"" + j + "\">" + $(this).val() + "<br>")
         updateSave();  
        window.lengthj = window.texter.length
        j = note.title + window.lengthj
        $(this).val("")
         window.numj = 0;
          
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
