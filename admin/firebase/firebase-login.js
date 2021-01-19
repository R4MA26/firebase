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

// /*================Mengambil data dari form=================*/
document.getElementById("form-login").addEventListener("submit", e => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    e.preventDefault();
    
    //============ Input data ke auth firebase ==================//
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
        //ambil data satu kali di child admin berdasarkan uid email yg digunakan login
        var userId = firebase.auth().currentUser.uid;
        return firebase.database().ref('/admin/' + userId).once('value').then(function(snapshot) {
            var role = snapshot.val().role;
            if (role == "admin"){
                alert("Berhasil Login Sebagai Admin !");
                //redirrect ke index.php jika role dari email yang digunakan login adalah "admin"
                window.location = "index.php";
            }else {
                alert("Anda Bukan Admin !");
                //redirrect ke login.php jika role dari email yang digunakan login bukan "admin"
                window.location = "login.php";
            }
        });

    }).catch(function(error) { 
        console.log(error);
        alert(error.message);
    });  

});


function checkLogin(){
    var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          // User is signed in.
          uid = user.uid;
          // ...
      } else {
          uid = null;
          window.location = "login.php";
      }
    });  
}