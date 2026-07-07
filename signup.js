function signup() {
    let username = document.getElementById("newUsername").value;
    let password = document.getElementById("newPassword").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Account Created Successfully!");
    window.location.href = "login.html";
}