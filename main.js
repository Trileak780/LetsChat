var darktg = 0
function adduser() {
    username = document.getElementById('username').value;
    localStorage.setItem('username', username);
    window.location = "indexrm.html";
}
function dark() {
    if (darktg == 0) {
        document.getElementById("body").style.backgroundColor = "black";
        document.getElementById("title").style.color = "white";
        document.getElementById("dark_button").style.backgroundColor = "white";
        document.getElementById("dark_button").style.color = "black";
        document.getElementById("dark_button").innerHTML = "Light Mode";
        darktg = 1;
    }
    else if (darktg == 1) {
        document.getElementById("body").style.backgroundColor = "#ffebcd";
        document.getElementById("title").style.color = "black";
        document.getElementById("dark_button").style.backgroundColor = "black";
        document.getElementById("dark_button").style.color = "white";
        document.getElementById("dark_button").innerHTML = "Dark Mode";
        darktg = 0;
    }
}