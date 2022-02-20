var password = "";

function generatePassword() {
    console.log(Math.random().toFixed(2)*100);
    password = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
    prompt("Copy to clipboard: Ctrl+C, Enter", password);
    document.getElementById("password").innerHTML = password;
}

const usePassword = () => {
    document.getElementById("passwordField").value = password;
}