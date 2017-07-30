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
    if(joey.Request != undefined)
    {
      var bg = joey.Request
      for(i=0;i<bg.length;i++)
      {
window.names.push(joey.Request[i])
      }
    }
  }
  if(window.names != undefined)
  {
    console.log("JOHNNY IS COL")
  loadNotes()
  }
  });
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
  window.tr = joey.Access
}
    
    window.req = []
  window.req.push(joey.Request)
  console.log(joey.Request);
  if(window.req[window.num] == note.title)
  {
window.req.splice(window.num, 1)
  }
})
   
for(i=0;i<window.tr.length;i++)
{
if(window.tr[i] != note.title)
{
window.gf = "Nothing";
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
window.tr = note.title[0]
}
        console.log(window.tr)
        console.log(window.req)
   var classers = firebase.database().ref("Classes/" + window.identification)
classers.update({
       Access: window.tr,
       Request: window.req
});
});  
      note.card.find("button").on("click", function() {
           var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey = data.val()
    window.req = []
  window.req.push(joey.Request)
  if(window.req[window.num] == note.title)
  {
window.req.splice(window.num, 1)
  }
  console.log(window.req)

})
           var classers = firebase.database().ref("Classes/" + window.identification)
classers.update({
       Request: window.req
});
      })
    
   
 
    return note;
    
}
window.onload = function()
{
load()
}

function loadNotes() {
  console.log(window.names);
       for(i=0;i<window.names.length;i++){
       var note = addAndSaveNote();
        if(note)
     function load(item, index) {
                if(item)
                    addAndSaveNote(item.title, index); 
            };
       }
}
