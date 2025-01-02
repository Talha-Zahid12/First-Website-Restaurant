document.addEventListener("DOMContentLoaded", function () {
    const buyNowButtons = document.querySelectorAll(".buy-now-btn");


    buyNowButtons.forEach(button => {
        button.addEventListener("click", function () {
            const itemName = this.parentElement.querySelector(".item-name").innerText;
            const itemPrice = this.parentElement.querySelector(".item-price").innerText;
            addToCart(itemName, itemPrice);
        });
    });

    const backToTopLinks = document.querySelectorAll(".back-to-top");
    backToTopLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });

    function addToCart(name, price) {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.push({ name, price });
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        alert(`${name} has been added to your cart!`);
    }

    function loadCartItems() {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const cartList = document.getElementById("cart-list");
        const totalPriceElement = document.getElementById("total-price");
        cartList.innerHTML = "";
        let total = 0;
        cartItems.forEach(item => {
            const li = document.createElement("li");
            li.innerText = `${item.name} - ${item.price}`;
            cartList.appendChild(li);
            total += parseInt(item.price.replace(/\D/g, ''));
        });
        totalPriceElement.innerText = total;
    }

    if (document.getElementById("cart-list")) {
        loadCartItems();
    }
});
function clear(){
    let name=document.getElementByClass["A"].value;
    name.value = "";
}