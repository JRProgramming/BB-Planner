window.names = [];
window.joe = [];
window.nameh = []
window.nameb = [];
window.ds = [];
window.ih = [];
window.hat = "";
window.number = 0;
window.numj = 0;
window.gf = 0;
window.b = 0;
window.l = 0;
window.y = 0;
window.s = 0;
window.z = 0;
window.id = [];
window.hy = [];
var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
    var joey = data.val()
    window.names = [];
    if (sessionStorage.getItem("name") != joey.name)
    {
        console.log(joey.Access);
        if (joey.Access != undefined)
        {
            if (joey.Access.indexOf(sessionStorage.getItem("name")) === -1)
            {
                if (joey.Request != undefined)
                {
                    if (joey.Request.indexOf(sessionStorage.getItem("name")) == -1)
                    {
                        window.names.push(joey.name);
                    }
                }
                else
                {
                window.names.push(joey.name);   
                }
            }
        }
        else
        {
         console.log(joey.Access);
            if (joey.Request != undefined)
            {
                if (joey.Request.indexOf(sessionStorage.getItem("name")) == -1)
                {
                    if (window.access == "nothing")
                    {
                        window.names.push(joey.name);
                    }
                }
            }
            else
            {
            window.names.push(joey.name);
            }
   }
}

    
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


    return {
        card: div,
        title: title
    };

}



function addAndSaveNote(title, index) {

    var note = addNote(title);
    window.obj = {
        title: note.title,
    }

    note.card.find("input[type=\"checkbox\"]").on("click", function() {
        if (note.card.find("input[type=\"checkbox\"]").is(':checked') == false)
        {
            var hg = note.title[0]
            for (i = 0; i < window.nameh.length; i++)
            {
                if (hg == window.nameh[i])
                {
                    var d = i
                }
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
        if (joey.name != sessionStorage.getItem("name"))
        {
            window.nameb.push(joey.name)
        }

        if (window.nameb[window.gf].includes(window.nameh[window.y]) == true)
        {
            if (window.nameh[window.y] != undefined && window.nameb[window.gf] != undefined)
            {
                window.identification = joey.ID;
                window.id.push(window.identification);
                window.ds = joey.Request

                if (joey.Request == undefined)
                {
                    window.ds = [];
                    window.ds.push(sessionStorage.getItem("name"));

                }
                else
                {
                    for (i = 0; i < window.ds.length; i++)
                    {
                        if (window.ds[i] == sessionStorage.getItem("name"))
                        {
                            window.gr = "Taken"
                        }
                        else
                        {
                            window.gr = "Nothing"
                        }
                    }
                    if (window.gr == "Nothing")
                    {
                        window.ds.push(sessionStorage.getItem("name"))

                    }
                }
                window.y += 1;

            }
            window.hy.push(window.ds)
        }


        window.gf += 1

    })
    for (i = 0; i < window.id.length; i++)
    {
        var classers = firebase.database().ref("Classes/" + window.id[window.s])
        classers.update({
            Request: window.hy[window.s]
        })
        window.s += 1
    }
    location.href = "requestPermission"
}

function loadNotes() {
    for (i = 0; i < window.names.length; i++) {
        var note = addAndSaveNote();
        if (note)
            function load(item, index) {
                if (item)
                    addAndSaveNote(item.title, index);
            }
        ;
    }
}

