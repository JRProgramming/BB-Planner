window.names = [];
window.joe = [];
window.nameh = []
window.number = 0;
window.numj = 0;
window.gf = 0;
var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey = data.val()
  if(sessionStorage.getItem("name") != joey.name)
  {
  window.names.push(joey.name);
  }
  loadNotes()

  });




function addNote(title, text) {
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


 window.b = 0
function addAndSaveNote(title, index) {
 
    var note = addNote(title);
    window.obj = {
        title: note.title,
    }

     $("input[type=\"checkbox\"]").on("click", function() {
    while(window.names[window.numj] != note.title)
      {
    window.numj += 1
      }
       if(window.names[window.numj] == note.title)
       {
         window.hat = note.title;
      console.log(note.title);
          window.numj = 0;
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
    console.log(window.identification);
  }
  
    window.gf += 1
})
  for(i=0;i<window.names.length;i++)
  {
   var classers = firebase.database().ref("Classes/" + window.identification + "/Access")
   classers.update({
         access: window.nameh[i]
   })
  }
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

