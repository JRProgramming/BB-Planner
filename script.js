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

var j = -1;
window.j = -1
/* Add a note w/o saving it */
function addNote(title, text) {
var playersRef = firebase.database().ref("Classes/");

playersRef.on("child_added", function(data, prevChildKey) {
   var newPlayer = data.val();
    window.j += 1;
    title = title || newPlayer.classes[window.j]
    
    
});
    text = text || "Lorem ispum dolor sit amet...";
    var div = $("<div/>", {
        "class": "mdl-card mdl-shadow--2dp note"            
    });
    div.appendTo(".mdl-layout__content");
        
    var title_e = $("<div/>", {
        "class": "mdl-card__title" 
    });
    title_e.appendTo(div);
        
    var title_text = $("<input>", {
        "class": "mdl-card__title-text"
    });
    title_text.val(title);
    title_text.appendTo(title_e);
        
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
    
    return {card: div, title: title, text: text};
}

/* Add a note and save it (aka create a note) */
function addAndSaveNote(title, text, index) {
    var note = addNote(title, text);
    var obj = {
        title: note.title,
        text: note.text
    };
    alert(note.title)
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
    return note;

}

/* Load notes from localStorage */
function loadNotes() {
    try {
        var note = JSON.parse(localStorage.getItem("note"));
        if(note)
            note.forEach(function(item, index) {
                if(item)
                    addAndSaveNote(item.title, item.text, index); 
            });
    } catch(err) {
        alert("An error occured while loading notes.\n\nWe are sorry for this incident. If you would like to report this, go to the link below.\n\nhttps://github.com/Allen-B1/free-simple-note/issues/new?title=Notes%20Loading%20Error&body=" + encodeURI("I got an error about loading notes.\n\n**Stats**\nError: `" + err + "`"));
        console.error(err);
    }
}

$(document).ready(function() {
    loadNotes();
    
    $("#btn").click(function() {

        addAndSaveNote();
       
    })
})
