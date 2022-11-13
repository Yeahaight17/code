
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
  import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAmcpymPgsMZOSgaaD9qw5j4M843b2tpA0",
    authDomain: "signup-and-in-test.firebaseapp.com",
    databaseURL: "https://signup-and-in-test-default-rtdb.firebaseio.com",
    projectId: "signup-and-in-test",
    storageBucket: "signup-and-in-test.appspot.com",
    messagingSenderId: "139297960496",
    appId: "1:139297960496:web:35f7a745e352d944dff3f5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();

  let logbuttons = document.querySelectorAll('.logbuts')
  logbuttons.forEach((e)=>e.addEventListener('click', function (e) {
    let elclicked = e.target;
    console.log(elclicked.id)
  }));


  function signupfun(){
  var fullname = document.getElementById('SignupName').value
  var email = document.getElementById('SignupEmail').value
  var password = document.getElementById('SignupPassword').value
  createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;

  set(ref(database, 'users/' + user.uid),{
      fullname:fullname,
      email:email
  })
  alert('successful!!!')
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorMessage);    
  // ..
});
}

  function loginfun(){
  var email = document.getElementById('LoginEmail').value
  var password = document.getElementById('LoginPassword').value
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    alert("login!!!")
    const user = userCredential.user;
    window.location.href = "gamescard.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage); 
  });
}

function signoutfun(){
  signOut(auth).then(() => {
    window.location = "home.html";
    alert("yesss")
  // Sign-out successful.
}).catch((error) => {
    alert("oops")
  // An error happened.
});
}




  