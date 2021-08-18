const signup = document.getElementById("signup");

function showSignup() {
    signup.style.display = "block";
    stateChanged();
}

function hideSignup() {
    signup.style.display = "none";
    stateChanged();
}
