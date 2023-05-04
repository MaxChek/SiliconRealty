    const firebaseConfig = {
        apiKey: "AIzaSyBdpm4wrPrGG0WVDUTr2w1Npekc3sMv1eg",
        authDomain: "siliconrealtyabout.firebaseapp.com",
        projectId: "siliconrealtyabout",
        databaseURL: "https://siliconrealtyabout-default-rtdb.firebaseio.com/",
        storageBucket: "siliconrealtyabout.appspot.com",
        messagingSenderId: "870164313495",
        appId: "1:870164313495:web:e86cc28bf53f85c66700d2"
      };
const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();
const detailsRef = dbRef.child('userdetails');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
var newPost = snapshot.val();
});
function send(){
var name = document.getElementByID("name").value;
var phone = document.getElementByID("phone").value;
var email = document.getElementById("email").value;
var subject = document.getElementById("subject").value;
var message = document.getElementByID("message").value;
detailsRef.push().set({
name: name,
phone: phone,
email: email,
subject: subject,
message: message,
});
}