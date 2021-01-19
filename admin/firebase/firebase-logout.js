// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDyTyPt--P3iv2rie-OKTCDlolIDS4T1Es",
  authDomain: "papan-informasi-38af4.firebaseapp.com",
  databaseURL: "https://papan-informasi-38af4.firebaseio.com",
  projectId: "papan-informasi-38af4",
  storageBucket: "papan-informasi-38af4.appspot.com",
  messagingSenderId: "393773272937",
  appId: "1:393773272937:web:d615bd34e93a932b0237f8",
  measurementId: "G-TW4F0YC295"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function logout(){
    firebase.auth().signOut().then(function() {
      window.location = "login.php";
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
}


      
