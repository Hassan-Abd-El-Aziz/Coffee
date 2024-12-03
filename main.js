let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
    searchfrm.classList.remove("active");
    cartItem.classList.remove("active");
}

let cartItem = document.querySelector(".cart-items-contaioner");
document.querySelector("#cart-btn").onclick = () => {
    cartItem.classList.toggle("active");
    navbar.classList.remove("active");
    searchfrm.classList.remove("active");

}

let searchfrm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
    searchfrm.classList.toggle("active");
    navbar.classList.remove("active");
    cartItem.classList.remove("active");
}

window.onscroll = () => {
    navbar.classList.remove("active");
    searchfrm.classList.remove("active");
    cartItem.classList.remove("active");
}