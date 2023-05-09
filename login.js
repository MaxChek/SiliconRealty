const firebaseConfig = {
  apiKey: "AIzaSyALl1u_n2A6niOVFmzCgLFKh3ZPnFoioW0",
  authDomain: "siliconrealty-f5f46.firebaseapp.com",
  projectId: "siliconrealty-f5f46",
  databaseURL: "https://siliconrealty-f5f46-default-rtdb.firebaseio.com/",
  storageBucket: "siliconrealty-f5f46.appspot.com",
  messagingSenderId: "331159703788",
  appId: "1:331159703788:web:effc39011af0c4f3b715c9"
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
function send1(){
  var name = document.getElementByID("name").value;
  /*
  var phone = document.getElementByID("phone").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementByID("message").value; */
  detailsRef.push().set({
  name: name,
 /* phone: phone,
  email: email,
  subject: subject,
  message: message, */
});
}
