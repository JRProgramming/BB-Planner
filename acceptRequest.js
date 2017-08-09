window.names = [];
window.tr = [];
window.req = [];
window.number = 0;
window.num = 0; 
function load()
{
var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey = data.val()
  if(sessionStorage.getItem("name") == joey.name)
  {
    window.identification = joey.ID
    if(joey.Request != undefined)
    {
      var bg = joey.Request
      for(i=0;i<bg.length;i++)
      {
window.names.push(joey.Request[i])
      }
        loadNotes()
    }
     checkForFriends()
  }




  });
}

function signal()
{
var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey = data.val()
  if(sessionStorage.getItem("name") == joey.name)
  {
    window.identification = joey.ID
    if(joey.Request != undefined)
    {
      var bg = joey.Request
      for(i=0;i<bg.length;i++)
      {
window.names.push(joey.Request[i])
      }
    }
  }
  });
  if(window.names.length != 0)
  {
document.getElementById("accept").innerHTML = "Accept Friend Request (" + window.names.length + ")"
  }
}


function addNote(title, text, hj) {
   var div = $("<div/>", {
        "class": "mdl-card mdl-shadow--2dp note"            
   });
    div.appendTo(".mdl-layout__content")
        
  title = title || window.names[window.number];
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
   
     text = text || "Accept"; 
    var sup_text = $("<a/>", {
        "class": "mdl-button mdl-js-button",
        "contenteditable": "false"
    });
  
 hj = hj || "Deny";
  var super_text = $("<button/>", {
   "class": "mdl-button mdl-js-button",
    "contenteditable": "false"
    
  });
   
                     
    sup_text.html(text);
    sup_text.appendTo(div);

  super_text.html(hj);
  super_text.appendTo(div);

    var menu = $("<div/>", {
        "class": "mdl-card__menu" 
    });
    menu.appendTo(div);
    
    window.number += 1
     
    return {card: div, title: title};
  
}



function addAndSaveNote(title, index) {
 
    var note = addNote(title);
    window.obj = {
        title: note.title,
    }
   var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey = data.val()
  if(sessionStorage.getItem("name") == joey.name)
  {
     window.identification = joey.ID
  }

});
      note.card.find("a").on("click", function() {

   var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey = data.val()
if(joey.Access != undefined)
{
  if(sessionStorage.getItem("name") == joey.name)
  { 
  window.tr = joey.Access
  }
}
    if(sessionStorage.getItem("name") == joey.name)
    {
    window.req = []
  window.req = joey.Request
      for(i=0;i<window.req.length;i++)
    {
  if(window.req[i] == note.title)
  {
window.req.splice(i, 1)
   
  }
    }
    }
})

for(i=0;i<window.tr.length;i++)
{
if(window.tr[i] != note.title)
{
  if(window.gf != "Something")
  {
window.gf = "Nothing";
  }
}
  else
  {
   window.gf = "Something"; 
  }

}
        if(window.tr.length == 0)
        {
window.gf = "Nothing"
        }
        
if(window.gf == "Nothing")
{
window.tr.push(note.title);
}
   var classers = firebase.database().ref("Classes/" + window.identification)
classers.update({
       Access: window.tr,
       Request: window.req
});
             var bob = firebase.database().ref("Completion/")
       bob.set("Data is stored", function(error) {
  if (error) {
    alert("There was a network error and we need you to try again.");
  } else {
   location.href = "acceptRequest";
  }
}); 
});  
      note.card.find("button").on("click", function() {
           var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey = data.val()
  if(sessionStorage.getItem("name") == joey.name)
  {
    window.req = []
  window.req = joey.Request
    for(i=0;i<window.req.length;i++)
    {
  if(window.req[i] == note.title)
  {
window.req.splice(i, 1)
  }
    }
  }
})
           var classers = firebase.database().ref("Classes/" + window.identification)
classers.update({
       Request: window.req
});
                     var bob = firebase.database().ref("Completion/")
       bob.set("Data is stored", function(error) {
  if (error) {
    alert("There was a network error and we need you to try again.");
  } else {
   location.href = "acceptRequest";
  }
}); 
      })
    
   
 
    return note;
    
}
window.onload = function()
{
load()
signal()
}
function homepage()
{
location.href = "index.html";
}

function loadNotes() {
  console.log(window.names.length);
       for(i=0;i<window.names.length;i++){
       var note = addAndSaveNote();
        if(note)
     function load(item, index) {
                if(item)
                    addAndSaveNote(item.title, index); 
            };
       }
}
function checkForFriends()
{
 var ref = firebase.database().ref("Classes/" + window.identification + "/Request");
ref.once("value")
  .then(function(snapshot) { 
  window.a = snapshot.exists();
 if(window.a == false)
 {
document.getElementById("h1").innerHTML = "No one has requested access to your planner."
document.getElementById("h3").innerHTML = "You are cleared so far."
 }
  });
}
