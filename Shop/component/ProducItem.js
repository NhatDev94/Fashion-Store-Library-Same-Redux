import html from "../js/core.js"

function ProducItem(product, index) {
    return html`
        <div class="item">
            <img src="${product.img}" alt="">
            <div class="item-info">
                <p class="item-title">${product.name}</p>
                <p class="item-price">${product.price} d</p>
            </div>
            <div class="item-handle">
                <input type="text" value="${product.order}" readonly>
                <button 
                    class="sub"
                    onclick="dispatch('sub',${product,index})"
                >-</button>
                <button 
                    class="add"
                    onclick="dispatch('add',${product,index})"
                >+</button>
            </div>
        </div>
    `
}

export default ProducItem