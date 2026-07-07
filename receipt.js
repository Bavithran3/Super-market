let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("rname").innerText =
    localStorage.getItem("customerName");

document.getElementById("raddress").innerText =
    localStorage.getItem("customerAddress");

document.getElementById("rphone").innerText =
    localStorage.getItem("customerPhone");

// Generate Order ID
let orderId = "ORD" + Math.floor(Math.random() * 100000);

// Current Date & Time
let now = new Date();

let date = now.toLocaleDateString();

let time = now.toLocaleTimeString();

document.getElementById("orderId").innerText = orderId;
document.getElementById("date").innerText = date;
document.getElementById("time").innerText = time;

let products = document.getElementById("products");
let total = 0;

cart.forEach(item => {
    products.innerHTML += "<p>" + item.name + " - " + item.price + "</p>";

    total += parseInt(item.price.replace(/[^\d]/g, ""));
});

document.getElementById("total").innerText = "Total: \u20B9" + total;
let receipt = {
    orderId: document.getElementById("orderId").innerText,
    customer: localStorage.getItem("customerName"),
    total: total,
    date: document.getElementById("date").innerText,
    time: document.getElementById("time").innerText
};

let history = JSON.parse(localStorage.getItem("receiptHistory")) || [];
history.push(receipt);

localStorage.setItem("receiptHistory", JSON.stringify(history));
// Clear cart after showing receipt
localStorage.removeItem("cart");
function goHome() {
    localStorage.removeItem("cart");
    window.location.href = "index.html";
}