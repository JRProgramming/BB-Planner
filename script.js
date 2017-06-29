var all_notes = JSON.parse(localStorage.getItem("note"));
all_notes = all_notes instanceof Array ? all_notes : [];

function updateSave() { 
    localStorage.setItem("note", JSON.stringify(all_notes));
}

function removeNote(index, div) {
    all_notes[index] = null;
    $(div).remove();
    updateSave();
}

function askRemoveNote(index, div){
    console.log(index + " is Index ");
    if(confirm("Are you sure you want to remove '" + (all_notes[index].title) + "'?"))
        removeNote(index, div);
}
var j = 0
window.j = 0
var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
   var newPlayer = data.val()
   var johnny = newPlayer.classes
   window.johnny = newPlayer.classes
   var lengths = newPlayer.classes.length
   window.lengths = newPlayer.classes.length
  });



/* Add a note w/o saving it */
function addNote(title, text) {
   var div = $("<div/>", {
        "class": "mdl-card mdl-shadow--2dp note"            
   });
    div.appendTo(".mdl-layout__content")
    title = title || window.johnny[window.j]
    
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
     var btn = $("<button/>", {
         "class":"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"
     });
     btn.css("color", "white");
     btn.appendTo(menu);
     btn.html('<i class="material-icons">&#xe872;</i>');
    window.j += 1
     
    return {card: div, title: title, text: text};
  
}

/* Add a note and save it (aka create a note) */
function addAndSaveNote(title, text, index) {
for(i=0; i<window.lengths; i+=1){
    var note = addNote(title, text);
    var obj = {
        title: note.title,
        text: note.text
    };
    if(typeof index === "number") {
        all_notes[index] = obj;
    } else {
        index = all_notes.length;
        all_notes.push(obj);
    }
    
    note.card.find(".mdl-card__title-text").on("input", function() {
        obj.title = $(this).val();
        updateSave();
    });
    
    var onUp = function() {
        obj.text = $(this).html();
        updateSave();
    };
    note.card.find(".mdl-card__supporting-text").on("input", onUp);
    note.card.find("button").click(function() {
        askRemoveNote(index, note.card); 
    });
    updateSave();
    
    note.onUp = onUp;
}
    return note;
}
funtion loser()
{
 alert("LOSER");   
}

function loadNotes() {
    alert("YAH");
   loser();
}

$(document).ready(function() {
    loadNotes();
})
