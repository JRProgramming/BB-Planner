


var j = 0
window.j = 0
var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
   var newPlayer = data.val()
   var johnny = newPlayer.classes
   window.johnny = newPlayer.classes
   var lengths = newPlayer.classes.length
   window.lengths = newPlayer.classes.length
   loadNotes();
   alert(window.namel);
  });

var data = sessionStorage.getItem("name")
document.getElementById("titler").innerHTML = "<span class=\"mdl-layout-title\">data</span>"


/* Add a note w/o saving it */
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
   

       text = text || "Lorem ispum dolor sit amet..."; 
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

/* Add a note and save it (aka create a note) */
function addAndSaveNote(title, text, index) {
    for(i=0;i<window.lengths;i++){
    var note = addNote(title, text);
    var obj = {
        title: note.title,
        text: note.text
    };
    
    note.card.find(".mdl-card__title-text").on("input", function() {
        obj.title = $(this).val();

    });
    
    var onUp = function() {
        obj.text = $(this).html();

    };
    note.card.find(".mdl-card__supporting-text").on("input", onUp);
   
   
    
    note.onUp = onUp;
    }
    return note;
    
}
function loadNotes() {
    
       var note = addAndSaveNote();
        if(note)
     function load(item, index) {
                if(item)
                    addAndSaveNote(item.title, item.text, index); 
            };
    
}
