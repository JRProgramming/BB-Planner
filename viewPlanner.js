window.numb = 0
window.kh = 0
window.array = [];
window.tarray = [];
window.hw = [];
window.yu = [];
window.bo = [];
window.boy = [];
window.j = 0
var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey = data.val()
  if(localStorage.getItem("name") == null)
  {
location.href = "https://jrprogramming.github.io/BB-Planner"
  }
  var names = localStorage.getItem("name")
 var nameS = sessionStorage.getItem("nameS");
   if(joey.name == names)
   {
window.lclass = joey.classes
   }
   if(joey.name == nameS)
   {
window.johnny = joey.classes
     window.identification = joey.ID
   }
  match()
  });
function homework()
{
for(i=0;i<window.array.length;i++)
{

var playersRef = firebase.database().ref("Classes/" + window.identification + "/Homework/"+ window.fclass[window.yu[i]]);
playersRef.on("child_added", function(data, prevChildKey) {
  var joey =  data.val()
  window.hw.push(joey);
})
}
}
function match()
{
if(window.boy != undefined && window.bo != undefined)
{
  if(window.kh == 0)
  {
  for(i=0;i<window.johnny.length;i++)
 {
if(window.johnny[window.numb] == window.lclass[window.numb])
{

if(window.johnny[i] == "Spanish1" || window.johnny[i] == "SpanishH4" || window.johnny[i] == "Spanish6")
{
 window.green.push("Spanish");
}
else if(window.johnny[i] == "EnglishD1" || window.johnny[i] == "EnglishT3" || window.johnny[i] == "EnglishD4" || window.johnny[i] == "EnglishT6" || window.johnny[i] == "EnglishT9")
{
window.green.push("English")
}
else if(window.johnny[i] == "ES1" || window.johnny[i] == "PS3" || window.johnny[i] == "ES3" || window.johnny[i] == "ES6" || window.johnny[i] == "ES9")
{
window.green.push("Science")
}
else if(window.johnny[i] == "M8t" || window.johnny[i] == "Math9")
{
window.green.push("Math")
}
else if(window.johnny[i] == "AlgebraC4" || window.johnny[i] == "AlgebraT6" || window.johnny[i] == "AlgebraC9")
{
window.green.push("Algebra")
}
else if(window.johnny[i] == "Italian3" || window.johnny[i] == "Italian4")
{
window.green.push("Italian")
}
else if(window.johnny[i] == "SSL3" || window.johnny[i] == "SSL6" || window.johnny[i] == "SSB4" || window.johnny[i] == "SSB9")
{
window.green.push("Social Studies")
}
 else
 {
window.green.push("Specials")
 }
window.array.push(window.green[window.numb])
window.yu.push(window.numb)
  alert(window.array)
}
window.numb += 1
}
    homework()
    window.kh += 1
    loadNotes()
  }
}
}
function addNote(title, text) {
   var div = $("<div/>", {
        "class": "mdl-card mdl-shadow--2dp note"            
   });
    div.appendTo(".mdl-layout__content")
        
  title = title || window.array[window.j];
        
    var title_e = $("<div/>", {
        "class": "mdl-card__title", 
        "contenteditable": "false"
    });
    title_e.appendTo(div);
        
    var title_text = $("<input>", {
        "class": "mdl-card__title-text"
    });
    
    title_text.val(title);
    title_text.appendTo(title_e);
   

       text = text || window.hw[window.j]; 
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

window.classes = [];
window.numj = 0
function addAndSaveNote(title, text, index) {
 
    var note = addNote(title, text);
    window.obj = {
        title: note.title,
        text: note.text
    }

     

    return note;
    
}

function homepage()
{
location.href = "index.html";
}

function loadNotes() {
       for(i=0;i<window.array.length;i++){
       var note = addAndSaveNote();
        if(note)
     function load(item, index) {
                if(item)
                    addAndSaveNote(item.title, item.text, index); 
            };
       }
}

