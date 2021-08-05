import html from "../js/core.js";
import CartProductItem from "./CartProductItem.js";
import { connect } from "../js/store.js";

const connector = connect()

function CartProduct({products, isHide}) {
    return html`
        <div 
            class="cart-overlay ${isHide && 'display-none'}"
            onclick="dispatch('hideCartContent')"
        ></div>
        <div class="cart-product ${isHide && 'display-none'}">
            <h4>Danh sach san pham: </h4>
            <ul class="cart-products-list">
                ${products.map( (product, index) => product.order > 0 && CartProductItem(product, index))}
            </ul>
            <button 
                class="buy-submit"
                onclick="dispatch('buySubmit')"
            >Thanh toan</button>
        </div>
    `
}

export default connector(CartProduct)