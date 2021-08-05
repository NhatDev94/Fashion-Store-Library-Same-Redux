import html from "../js/core.js";
import CartProduct from "./CartProduct.js";
import LogIn from "./LogIn.js";

function Header() {
    return html`
        <header class="header" id="home">
            <a href="#" class="logo">Nhat Dev</a>
            <ul class="nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#product">Product</a></li>
                <li><a href="#contact">Contact</a></li>
                <li class="login">
                    <a href="#">
                        <p onclick="dispatch('showLoginForm')">LogIn</p>
                        ${LogIn()}
                    </a>
                </li>
                <li class="cart">
                    <a href="#">
                        <i 
                            class="fas fa-shopping-cart"
                            onclick="dispatch('showCartContent')"
                        ></i>
                        ${CartProduct()}
                    </a>
                </li>
            </ul>
        </header>
    `
    
}

export default Header