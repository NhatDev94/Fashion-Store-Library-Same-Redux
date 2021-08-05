import html from "../js/core.js";
import ProductItem from './ProducItem.js'
import { connect } from "../js/store.js";

const connector = connect()
function Product({products}) {
    return html`
        <section class="product" id="product">
            <div class="row">
                ${products.map((product, index) => ProductItem(product, index))}
            </div>
        </section>
    `
}

export default connector(Product)