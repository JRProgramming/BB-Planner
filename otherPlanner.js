window.names = []
window.number = 0;
var b = 0
var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey = data.val()
window.names = [];
  if(localStorage.getItem("name") == null)
  {
location.href = "https://jrprogramming.github.io/BB-Planner"
  }
  if(localStorage.getItem("name") != joey.name)
  {
    if(joey.Access != undefined)
    {
  for(i=0;i<joey.Access.length;i++)
  {
if(joey.Access[i] == localStorage.getItem("name"))
{
window.names.push(joey.name)
}
  }
    }
  if(window.names.length == 0)
  {
    if(b != 1)
    {    
document.getElementById("h1").innerHTML = "Seems like no one is sharing their planner with you."
document.getElementById("h3").innerHTML = "Would you like to request access to your friend's planner?"
document.getElementById("button1").innerHTML = "<button style=\"margin: 8px\" class = \"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" onclick = \"noFriend()\">Let's look for some friends</button><span><button class = \"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" style=\"margin: 8px\" onclick=\"home()\">Go back to my planner</button></span>"
    }
  }
  else
  {
    b =  1
document.getElementById("h1").innerHTML = "Here are all the kids in your grade."
document.getElementById("button1").innerHTML = ""
  }
  }
  loadNotes()
  signal()
  });


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
document.getElementById("access").innerHTML = "Accept Friend Request (" + window.names.length + ")"
  }
    
    }
  }
  });

}

function addNote(title, text) {
   var div = $("<div/>", {
        "class": "mdl-card mdl-shadow--2dp note"            
   });
    div.appendTo(".mdl-layout__content")   
  title = title || window.names;
        
    var title_e = $("<div/>", {
        "class": "mdl-card__title" 
    });
    title_e.appendTo(div);
        
    var title_text = $("<input>", {
        "class": "mdl-card__title-text",
        "contenteditable": "false",
        
    });
    
    title_text.val(title);
    title_text.appendTo(title_e);
   
     text = text || "Select"; 
    var sup_text = $("<a/>", {
        "class": "mdl-button mdl-js-button",
        "contenteditable": "false"
    });
  
    sup_text.html(text);
    sup_text.appendTo(div);


    var menu = $("<div/>", {
        "class": "mdl-card__menu" 
    });
    menu.appendTo(div);
    
    window.number += 1
     
    return {card: div, title: title};
  
}


window.b = 0
function addAndSaveNote(title, index) {
 
    var note = addNote(title);
    window.obj = {
        title: note.title,
    }

     note.card.find("a").on("click", function() {
       window.tilt = note.title
        window.b += 1
        sessionStorage.setItem("nameS", window.tilt)
        location.href = "viewPlanner"
    });
    
   
 
    return note;
    
}

function noFriend()
{
location.href = "requestPermission"
}
function home()
{
location.href = "index.html"
}

function homepage()
{
location.href = "index.html";
}
window.onload = function()
{
signal()
}

function loadNotes() {
  for(i = 0; i < window.names.length; i ++)
  {
       var note = addAndSaveNote();
        if(note)
     function load(item, index) {
                if(item)
                    addAndSaveNote(item.title, index); 
            };
  }
}
