//alert("Welcome to the Contact Us Page");
//Tell JavaScript to call saveContactswhen SUBMIT button is clicked
const btn = document.getElementById("submit-data");
btn.addEventListener("click", saveContacts);
// Submit clicked so post the data to the server
function saveContacts() {
  alert("SUBMIT clicked!!!");}

// read the data from the email field
const emailField = document.getElementById("save");
const emailFieldValue = emailField.value;
alert(emailFieldValue)