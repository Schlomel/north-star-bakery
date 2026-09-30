const bakeryProducts = [
    {
        name: "Signature Loaf",
        category: "Bread"
    },
    {
        name: "Fresh Pastries",
        category: "Pastry"
    },
    {
        name: "Celebration Cakes",
        category: "Cake"
    }
];

function displayFavorite(productName) {
    const message = document.getElementById("favorite-message");

    message.textContent = productName + " has been saved as your favorite!";

    localStorage.setItem("favoriteProduct", productName);
}

function loadFavorite() {
    const savedFavorite = localStorage.getItem("favoriteProduct");
    const message = document.getElementById("favorite-message");

    if (savedFavorite && message) {
        message.textContent = "Your saved favorite is " + savedFavorite + ".";
    }
}
window.addEventListener("DOMContentLoaded", loadFavorite);

const orderForm = document.getElementById("order-form");

if (orderForm) {
    orderForm.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
       
        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");

nameError.textContent = "";
emailError.textContent = "";

        
       let formIsValid = true;

if (name.length < 2) {
    nameError.textContent = "Please enter a name with at least 2 characters.";
    formIsValid = false;
}

if (!email.includes("@") || !email.includes(".")) {
    emailError.textContent = "Please enter a valid email address.";
    formIsValid = false;
}

if (!formIsValid) {
    event.preventDefault();
    return;
}
        event.preventDefault();

alert("Thank you! Your request has been submitted.");
orderForm.reset();

    });
}

// Save and restore the customer's name
const customerName = document.getElementById("name");

if (customerName) {
    const savedName = localStorage.getItem("customerName");

    if (savedName) {
        customerName.value = savedName;
    }

    customerName.addEventListener("input", function() {
        localStorage.setItem("customerName", customerName.value);
    });
}