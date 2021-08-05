import html from '../js/core.js'

function CartProductItem(product, index) {
    return html`
        <li class="item">
            <img src="${product.img}" alt="">
            <div class="item-info">
                <p class="item-title">${product.name}</p>
                <p class="item-price">${product.price} d</p>
                <div class="item-handle">
                    <button 
                        class="sub-sub"
                        onclick="dispatch('sub',${index})"
                    >-</button>
                    <input type="text" value="${product.order}" readonly>
                    <button 
                        class="add-sub"
                        onclick="dispatch('add',${index})"
                    >+</button>
                </div>
            </div>
        </li>
    `
}

export default CartProductItem