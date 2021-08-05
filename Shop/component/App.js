import html from '../js/core.js'
import Header from "./Header.js"
import Slide from "./Slide.js"
import Product from "./Product.js"
import Contact from "./Contact.js"

export default function App() {
    return html`
        <div class="shop-app">
            ${Header()}
            ${Slide()}
            ${Product()}
            ${Contact()}
        </div>
    `
}