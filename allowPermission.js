window.names = [];
window.joe = [];
window.nameh = []
window.hat = "";
window.number = 0;
window.numj = 0;
window.gf = 0;
window.b = 0; 
window.l = 0;
var access = []
var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey = data.val()
  if(sessionStorage.getItem("name") != joey.name)
  {
  window.names.push(joey.name);
  }
else
{
access = joey.Access

}
  alert(access)


  loadNotes()

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
           var hg = note.title[0]
         
if(hg == window.nameh[i])
{
var d = i
}
          
         window.nameh.splice(d, 1)
         }
         else
         {
         var hg = note.title[0]
window.nameh.push(hg);
         }
    });
    
   
 
    return note;
    
}
function loadData()
{
  

    var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey = data.val()
  if(sessionStorage.getItem("name") == joey.name)
  {
     window.identification = joey.ID
    if(joey.Request != undefined)
    {
window.jh = joey.Request
      for(i=0;i<joey.Request.length;i++)
      {
        if(joey.Request.indexOf(window.nameh[i]) != -1)
        {
           window.jh.splice(i, 1)
        }
      }
    }
  }
    window.gf += 1
})
   var classers = firebase.database().ref("Classes/" + window.identification)
   classers.update({
         Access: window.nameh,
         Request: window.jh
   })
              var bob = firebase.database().ref("Completion/")
       bob.set("Data is stored", function(error) {
  if (error) {
    alert("There was a network error and we need you to try again.");
  } else {
   location.href = "allowPermission";
  }
}); 
}

function homepage()
{
location.href = "index.html";
}

function loadNotes() {
       for(i=0;i<window.names.length;i++){
       var note = addAndSaveNote();
        if(note)
     function load(item, index) {
                if(item)
                    addAndSaveNote(item.title, index); 
            };
       }
}
