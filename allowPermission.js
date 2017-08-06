window.joe = [];
window.nameh = []
window.hat = "";
window.number = 0;
window.numj = 0;
window.gf = 0;
window.b = 0;
window.l = 0;
var count = 0;
var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey = data.val()
  if(sessionStorage.getItem("name") != joey.name)
  {
    
     if(joey.Access != undefined)
    {
     
      if(joey.Access[1] != undefined)
      {
for(i=0;i<joey.Access.length;i++)
{
if(joey.Access[i] == sessionStorage.getItem("name"))
{
window.kl = "Taken"
}
}
        if(window.kl != "Taken")
        {
  window.names = joey.name;
    count += 1
  loadNotes()
        }
   }
   else
   {
if(joey.Access != sessionStorage.getItem("name"))
{
  window.names = joey.name;
    count += 1
  loadNotes()
}
   }
    }
     else
     {
  window.names = joey.name;
    count += 1
  loadNotes()
     } 
    
    

  }

  });

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
   
     text = text || ""; 
    window.sup_text = $("<input/>", {
        "type": "checkbox"
    });
  
    window.sup_text.html(text);
    window.sup_text.appendTo(div);


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

     note.card.find("input[type=\"checkbox\"]").on("click", function() {
      
         if(note.card.find("input[type=\"checkbox\"]").is(':checked') == false)
         {
           var hg = note.title
          for(i=0;i<window.nameh.length;i++)
          {
if(hg == window.nameh[i])
{
var d = i
}
          }
         window.nameh.splice(d, 1)
         }
         else
         {
         var hg = note.title
window.nameh.push(hg);
         }
    });
    
   
 
    return note;
    
}
function loadData()
{
  
for(i=0;i<window.nameh.length;i++)
{
  window.user = [];
    var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey = data.val()
  if(sessionStorage.getItem("name") == joey.name)
  {
window.id = joey.ID
    if(joey.Request != undefined)
    {
window.gh = joey.Request
 for(x=0;x<window.gh.length;x++)
 {
if(joey.Request != window.nameh[i])
{
  if(fey != "Something")
  {
fey = "Nothing"
  }
}
     else
   {
fey = "Something"
   }
}
    }
    else
    {
fey = "Nothing"
    }
    if(fey == "Something")
    {
for(q=0;q<window.gh.length;q++)
{
if(joey.Request[q] == window.nameh[i])
{
window.gh.splice(q,1)
}
}
    }
  }
  alert(window.gh)
  if(window.nameh[i] == joey.name)
  {
     window.identification = joey.ID
      if(joey.Access == undefined)
    {
window.user.push(sessionStorage.getItem("name"))
    }
    else
    {
window.user = joey.Access
      window.user.push(sessionStorage.getItem("name"))
     
    }
  }
})
   var classers = firebase.database().ref("Classes/" + window.identification)
   classers.update({
         Access: window.user
   })
   var classers = firebase.database().ref("Classes/" + window.id)
   classers.update({
         Request: window.gh
   })
}
  location.href = ""
  
}

function homepage()
{
location.href = "index.html";
}

function loadNotes() {
       var note = addAndSaveNote();
        if(note)
     function load(item, index) {
                if(item)
                    addAndSaveNote(item.title, index); 
            };
}
