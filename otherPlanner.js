window.names = []
window.number = 0;
var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey = data.val()
window.names = [];
  window.names.push(joey.name);
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
        "class": "mdl-card__title-text"
        "contenteditable": "false"
    });
    
    title_text.val(title);
    title_text.appendTo(title_e);
   
     text = text || "Select"; 
    var sup_text = $("<a/>", {
        "class": "mdl-card__supporting-text",
        "href": "index.html",
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


function addAndSaveNote(title, index) {
 
    var note = addNote(title);
    window.obj = {
        title: note.title,
    }
     note.card.find(".mdl-card__title-text").on("input", function() {
        window.obj.title = $(this).val();
    });
    
   
 
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
