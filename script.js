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

        if (name.length < 2) {
            event.preventDefault();
            alert("Please enter a name with at least 2 characters.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            event.preventDefault();
            alert("Please enter a valid email address.");
            return;
        }
        event.preventDefault();

alert("Thank you! Your request has been submitted.");
orderForm.reset();

    });
}