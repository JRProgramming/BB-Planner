window.names = []
window.number = 0;
var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey = data.val()
window.names = [];
  if(sessionStorage.getItem("name") != joey.name)
  {
  window.names.push(joey.name);
  }
  loadNotes()
  });




function addNote(title, text, hj) {
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

      note.card.find("a").on("click", function() {
       window.tilt = note.title  
   var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey = data.val()
  if(sessionStorage.getItem("name") == joey.name)
  {
     window.identification = joey.ID
  }
if(joey.Access != undefined)
{
  console.log("Not equal to undefined");
  window.tr = joey.Access
}
  else
  {
    console.log("Equals to undefined");
   window.tr = note.title; 
  }
  console.log(window.tr);
})
   var classers = firebase.database().ref("Classes/" + window.identification)
   classers.update({
         Access: note.title
   })
    });
  
      note.card.find("button").on("click", function() {
        window.gar = note.title
        console.log(window.gar);
      })
    
   
 
    return note;
    
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

