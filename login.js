window.names = [];
window.emails = [];
window.signup = "Not In"
window.errors = ""
var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
var joey = data.val();
var data = joey.name;
var emailer = joey.email;
window.identification = joey.ID;
window.names.push(data);
window.emails.push(emailer);
  });  
 
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
  if(window.namel != window.names[num])
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
num = 0
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
   setclass()
  }
});
sessionStorage.setItem("name", window.namel);
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
 if(window.a == false)
 {
  location.href = "setClass";
 }
 else if(window.a == true)
 {
var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
var joey = data.val();
if(joey.email ==  window.email)
{
  window.nme = joey.name
}
});  
 sessionStorage.setItem("name", window.nme);
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
 location.href = "index.html";
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
      if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        window.email = document.getElementById('email').value;
        window.password = document.getElementById('password').value;
        if(document.getElementById("namej").innerHTML != "")
        {
        var namel = document.getElementById("nameText").value;
        window.namel = document.getElementById("nameText").value;
        }
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
 var exists = ""
 var num = 0
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
  firebase.auth().signInWithEmailAndPassword(window.email, window.password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } 
           else {
            alert(errorMessage);
          }
          console.log(error);
        });
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    unique();
  } 
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
 if (email != "jramirez@blindbrook.org" && email != "harondwald@blindbrook.org" && email != "jkaminsky@blindbrook.org" && email != "abao@blindbrook.org" && email != "mshaw@blindbrook.org" && email != "jmayer@blindbrook.org" && email != "rcampbell@blindbrook.org")
{
alert("Not allowed here")
return;
}
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        // [END_EXCLUDE]
      });
      // [END createwithemail]
      toggleSignIn()
    }
    /**
     * Sends an email verification to the user.
     */
    function sendEmailVerification() {
      // [START sendemailverification]
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
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
else if(localStorage.email != "" && localStorage.password== "" && document.getElementById("rememember").checked == true)
{
console.log("YO STUPID WEIRDO");
toggleSignIn()
}
}
