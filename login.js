window.names = [];
window.emails = [];
window.signup = "Not In"
window.errors = ""
var namets = [];
function start()
{
var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
var joey = data.val();
var data = joey.name;
var emailer = joey.email;
window.identification = joey.ID;
window.names.push(data);
if(document.getElementById("email").value != "" && document.getElementById("password").value != "" && document.getElementById("remember").checked == true && localStorage.getItem("loggedOut") != "Log Out")
{
toggleSignIn();
}
}); 
}

   function unique(){
var num = 0
var exists = ""
if(document.getElementById("namej").innerHTML == "")
{
  var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
var joey = data.val();
window.emailj = joey.email;
  if(window.emailj == window.email)
{
window.identification = joey.ID;
setclass()
}
});
}
else
{  
for(i=0; i<window.names.length; i++)
{
  
  if(window.namel != window.names[i])
    {
      if(exists != "taken"){
        exists = "unique";
    }
    }
  else
    {
       exists = "taken";
      
    }
}
if(exists == "unique"){
  setter();
}
else
{
var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
var joey = data.val();
if(joey.name ==  window.namel)
{
 window.emailj = joey.email;
}
});
if(window.emailj == window.email)
{
setclass()
}
else
{
alert("Name is taken");
}
}
  exists = "";
}
 }
   function setter(){
     var num = 0;
     var exists = "";
     for(i=0; i<window.emails.length; i++)
{
  if(window.email != window.emails[num])
    {
      if(exists != "taken"){
        exists = "unique";
        num ++;
    }
    }
  else
    {
       exists = "taken";
      
    }
}
     if(exists == "unique"){
    var classers = firebase.database().ref("Classes/");
        var clas = classers.push({
          name: window.namel,
          email: window.email
         });
        var id = clas.key;
       window.id = clas.key;
       var hopperRef = classers.child(id);
       hopperRef.update({
           "ID": id
       });
       var bob = firebase.database().ref("Completion/")
       bob.set("Data is stored", function(error) {
  if (error) {
    alert("Log in failed." + error);
  } else {
     if(window.emailVerified != false)
     {
   setclass()
     }
     else
     {
alert("Your email hasn't been verified")
sendEmailVerification()
     }
  }
});
if(window.emailVerified == true)
{
localStorage.setItem("name", window.namel);
}
     }
     else
     {
      alert("Email is already used"); 
     }
}
   
   function setclass()
   {
      var ref = firebase.database().ref("Classes/" + window.identification + "/classes");
ref.once("value")
  .then(function(snapshot) { // true
  window.a = snapshot.exists();
if(document.getElementById("remember").checked)
 {
localStorage.setItem("email", window.email);
localStorage.setItem("password", window.password);

 }
 else
 {
 localStorage.setItem("email", "");
localStorage.setItem("password", "");  
 }
var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
var joey = data.val();
if(joey.email ==  window.email)
{
  window.nme = joey.name
}
});  
localStorage.setItem("loggedOut", "");
localStorage.setItem("name", window.nme);
   if(window.a == false)
 {
  location.href = "setClass";
 }
   else if(window.a == true)
 {
 location.reload();
 }
  });
     
   }
   
function setUp()
  {
   if(document.getElementById("signuplogin").innerHTML == "Sign Up"){
     
   document.getElementById("signuplogin").innerHTML = "Log In";
   document.getElementById("namer").innerHTML = "Full Name";
   document.getElementById("namej").innerHTML = "<input type=\"text\" placeholder=\"Enter your full name\" name=\"nme\" id=\"nameText\" required>"
   document.getElementById("namej").value = window.fname;
   document.getElementById("enter").innerHTML = "Sign Up"
   
   }
    else
    {
      window.fname = document.getElementById("namej").value;
      document.getElementById("signuplogin").innerHTML = "Sign Up"
      document.getElementById("namer").innerHTML = "";
      document.getElementById("namej").innerHTML = ""
      document.getElementById("enter").innerHTML = "Login"

    }
  }
  
    function toggleSignIn() {
        window.email = document.getElementById('email').value;
        window.password = document.getElementById('password').value;
        if(document.getElementById("namej").innerHTML != "")
        {
        var namel = document.getElementById("nameText").value;
        window.namel = document.getElementById("nameText").value;
           if(namel == "" || namel == " ")
           {
            alert("You didn't enter a name")
             return;  
           }
        }
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
var h = ""
var j = ""
for(i=0;i<window.email.length;i++)
{
var joe = window.email[i]
h = joe + h 
}
for(i=0;i<14;i++)
{
var joey = h[i]
j = joey + j 
}
if (j == "blindbrook.org")
{
alert("Not allowed here")
return;
}
         
 var exists = ""
 var num = 0
var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
   var joey = data.val()
window.emails.push(joey.email)
});
for(i=0; i<window.emails.length; i++)
{
  if(window.email != window.emails[num])
    {
      if(exists != "taken"){
        exists = "unique";
        num ++;
    }
    }
  else
    {
       exists = "taken";
      
    }
}
if(exists == "unique")
{
if(document.getElementById("namej").innerHTML != "")
{
if(window.signup == "Not In")
{
window.signup = "In";
handleSignUp();
}
else
{

 unique(); 

}
}
else
{
alert("Email is not found");
setUp();
}
}
else
{
alert("Woo ka doo doo")
  firebase.auth().signInWithEmailAndPassword(window.email, window.password).then(function()
  {
     alert("ba ba do")
          firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var displayName = user.displayName;
    var email = user.email;
    window.emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } 
});
     alert(window.emailVerified)
     if(window.emailVerified == true)
     {
     unique()  
     }
     else
     {
     alert("You haven't verified your email yet")
     emailVerification()
     }
  }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } 
          else
          {
           if (errorMessage == "A network error (such as timeout, interrupted connection or unreachable host) has occurred.")
           {
           location.href = ""
           }
             else
             {
     alert(errorMessage)
             }
          }
          
          console.log(error);
        });

   }

}
      
 
}
    /**
 ow.errors    * Handles the sign up button press.
     */
    function handleSignUp() {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }

      if(window.emailVerified == true)
      {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
     firebase.auth().onAuthStateChanged(function(user) {
    toggleSignIn()
});
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
         if(errorMessage == "A network error (such as timeout, interrupted connection or unreachable host) has occurred.")
         {
        
         }
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(errorMessage);
         
      });
      }
       else
       {      
          firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
     firebase.auth().onAuthStateChanged(function(user) {
     alert("Your email hasn't been verified")
       sendEmailVerification()
});
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
         if(errorMessage == "A network error (such as timeout, interrupted connection or unreachable host) has occurred.")
         {
        
         }
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(errorMessage);
         
      });
        
       }
    }


function logOut()
{
   firebase.auth().signOut().then(function() {
  localStorage.removeItem("name")
localStorage.setItem("loggedOut", "Log Out");
location.href = "https://jrprogramming.github.io/BB-Planner";
}).catch(function(error) {
  alert("An error had occured, please try again.")
});

}
    /**
     * Sends an email verification to the user.
     */
    function sendEmailVerification() {
       firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
  }
});
      firebase.auth().currentUser.sendEmailVerification().then(function() {
         
        alert('An email has been sent to you, please verify that this is your email.');
        // [END_EXCLUDE]
      }).catch(function(error) {
  alert(error);
});
      // [END sendemailverification]
    }
    function sendPasswordReset() {
      var email = document.getElementById('email').value;
      // [START sendpasswordemail]
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('Password Reset Email Sent!');
        // [END_EXCLUDE]
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
          alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END sendpasswordemail];
    }
window.onload =  function()
{
document.getElementById("email").value = localStorage.email
document.getElementById("password").value = localStorage.password
if(localStorage.email == undefined || localStorage.password == undefined){
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}
if(document.getElementById("email").value == "" && document.getElementById("password").value == "")
{
document.getElementById("remember").checked = false
} 
}
