// const login = document.getElementById("login");

function showLogin() {
    login.style.display = "block";
    stateChanged();
}

function hideLogin() {
    login.style.display = "none";
    stateChanged();
}

function loggedIn() {
    var loginNode = document.getElementById("loginText");
    var signupNode = document.getElementById("signupText");
    var addNode = document.getElementById("addText");

}