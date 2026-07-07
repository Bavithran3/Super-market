function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if (username === savedUser && password === savedPass) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("loggedInUser", username);
        alert("Login Successful!");
        window.location.href = "index.html";
    } else {
        document.getElementById("msg").innerText = "Invalid Username or Password";
    }
}
