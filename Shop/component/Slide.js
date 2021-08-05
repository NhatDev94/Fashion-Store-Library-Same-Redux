import html from "../js/core.js";
import { connect } from "../js/store.js";

const connector = connect()
function Slide({slideShow}) {
    return html`
        <section class="slide-show">
            <button 
                class="pre"
                onclick="dispatch('preSlide')"
            ><i class="fas fa-angle-left"></i></button>
            <button 
                class="next"
                onclick="dispatch('nextSlide')"
            ><i class="fas fa-angle-right"></i></button>
            <img src="${slideShow.img[slideShow.index]}" alt="Slide-show">
        </section>
    `
}

export default connector(Slide)