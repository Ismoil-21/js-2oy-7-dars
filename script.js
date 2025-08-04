
let form = document.getElementById("form");
let login = document.getElementById("Login");
let password = document.getElementById("parol");
let hideSee = document.getElementById("hideSee");
let btn = document.getElementById("bttn");

let user = {
    ism: "Ismoil",
    login: "12345",
    parol: 2828,
    coin: 1779,
    hp: 1000,
    group: "nf-2308"
}

hideSee.addEventListener("click", () => {
    if(password.type == "password"){
        password.type = "text";
    }
    else{
        password.type = "password"
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(login.value == user.login && password.value == user.parol){
        window.location.href = "./student.html";
        localStorage.setItem("usser", JSON.stringify(user));
    }else{
        error.textContent = "Login yoki parol xato";
    }
});

function isbutton() {
    if(login.value.trim() !== "" && password.value.trim() !== "") {
        btn.disabled = false;
        btn.style.backgroundColor ="orangered"
    }
    else{
        btn.disabled = true;
        btn.style.backgroundColor ="#F69E86"
    }
}

login.addEventListener("input", isbutton);
password.addEventListener("input", isbutton);