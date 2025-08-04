let user = JSON.parse(localStorage.getItem("user"));

let ism = document.getElementById("ism");

console.log(user);

ism.textContent = user.ism;