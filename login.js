window.names = [];
window.emails = [];
window.signup = "Not In"
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
 sessionStorage.setItem("name", window.namel);
 location.href = "index.html";
 }
  });
   }
   
  
    function toggleSignIn() {
      if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        window.email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var namel = document.getElementById("nameText").value;
        window.namel = document.getElementById("nameText").value;
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
if(window.signup == "Not In")
{
window.signup = "In";
handleSignUp();
}
else
{
 unique(); 
}

 return;
}

       
        //allow username to pass data into the planner and page and possibly the set class page!!
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(window.email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });
        // [END authwithemail]
          unique();
      }
      document.getElementById('quickstart-sign-in').disabled = false;
    }
    /**
     * Handles the sign up button press.
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
 if (email != "jramirez@blindbrook.org" && email != "harondwald@blindbrook.org" && email != "jkaminsky@blindbrook.org" && email != "abao@blindbrook.org" && email != "mshaw@blindbrook.org" && email != "jmayer@blindbrook.org")
{
alert(email)
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
       alert(error);
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
    /**
     * initApp handles setting up UI event listeners and registering Firebase auth listeners:
     *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
     *    out, and that is where we update the UI.
     */
    function initApp() {
      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        document.getElementById('quickstart-verify-email').disabled = true;
        // [END_EXCLUDE]
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // [START_EXCLUDE]
          document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
          document.getElementById('quickstart-sign-in').textContent = 'Sign out';
          document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
          if (!emailVerified) {
            document.getElementById('quickstart-verify-email').disabled = false;
          }
          // [END_EXCLUDE]
        } else {
          // User is signed out.
          // [START_EXCLUDE]
          document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
          document.getElementById('quickstart-sign-in').textContent = 'Sign in';
          document.getElementById('quickstart-account-details').textContent = 'null';
          // [END_EXCLUDE]
        }
        // [START_EXCLUDE silent]
        document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authstatelistener]
      document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
      document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
      document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
      document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
    }
    window.onload = function() {
      initApp();
    };
