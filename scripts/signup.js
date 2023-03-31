document.querySelector("#reg").addEventListener("click", register);
var signup = JSON.parse(localStorage.getItem("signUpData")) || [];

function register() {
//Code to create the object of signUp Data
var obj = {
  email: document.querySelector("#mail").value,
  firstName: document.querySelector("#firstname").value,
  lastName: document.querySelector("#lastname").value,
  enterPass: document.querySelector("#enterpass").value,
  confirmPass: document.querySelector("#confirmpass").value,
  gender: document.querySelector("#gender").value,
  mobile: document.querySelector("#mobile").value,
};

// Code to check the matching passwords
var enter = document.querySelector("#enterpass");
var confirm = document.querySelector("#confirmpass");
if (enter.value != confirm.value) {
  alert("Passwords do not match!!");
  document.querySelector("#enterpass").value = "";
  document.querySelector("#confirmpass").value = "";
  return;
}

//Code to check the length of mobile number
if (mobile.value.length != 10) {
  alert("Invalid Mobile Number!!");
  document.querySelector("#mobile").value = "";
  return;
}

signup.push(obj);
localStorage.setItem("signUpData", JSON.stringify(signup));

//Code to make all the inputs empty after clicking on registration
document.querySelector("#mail").value = "";
document.querySelector("#firstname").value = "";
document.querySelector("#lastname").value = "";
document.querySelector("#enterpass").value = "";
document.querySelector("#confirmpass").value = "";
document.querySelector("#gender").value = "";
document.querySelector("#mobile").value = "";

}