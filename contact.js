//alert("Welcome to the Contact Us Page");
//Tell JavaScript to call saveContactswhen SUBMIT button is clicked
const btn = document.getElementById("submit-data");
btn.addEventListener("click", saveContacts);
// Submit clicked so post the data to the server
function saveContacts() {
  alert("SUBMIT clicked!!!");}

// read the data from the email field
const emailField = document.getElementById("email");
const emailFieldValue = emailField.value;
alert(emailFieldValue)

// reset form 
emailField.value = '';  // clear the field
emailField.focus();  // set the focus

// code to save the data to Firebase GOES HERE!
const data = myDBCxn.push();
data.set( {email: emailFieldValue
          });
}

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0AVnZZm7GUL_KYBTJr0Y5QD6D08sdRT0",
  authDomain: "leaving-cert-project-aa8d6.firebaseapp.com",
  projectId: "leaving-cert-project-aa8d6",
  storageBucket: "leaving-cert-project-aa8d6.appspot.com",
  messagingSenderId: "563974271435",
  appId: "1:563974271435:web:0f808643a38ca0e2f2c64e",
  measurementId: "G-2SR9C6EWWW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Retrieve the database handle
const myDBCxn = firebase.database().ref('/contacts');