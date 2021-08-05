import { get, set } from "./localStorage.js";

var init = {
    products: get('products'),
    account: get('account'),
    isHide: true,
    login: false,
    create: false,
    emailMess: null,
    passwordMess: null,
    rePasswordMess: null,
    slideShow: {
        index: 0,
        img: [
            './img/slide1.jpg',
            './img/slide2.jpg',
            './img/slide3.jpg',
        ],
    },
}

const actions = {
    add(state, index) {
        state.products[index].order += 1
        set('products', state.products)
    },
    sub(state, index) {
        state.products[index].order > 0 ? state.products[index].order -= 1 : null
        set('products', state.products)
    },
    hideCartContent(state) {
        state.isHide = true
    },
    showCartContent(state) {
        state.isHide = null
    },
    buySubmit(state) {
        state.isHide = true
        state.products.map(product => product.order = 0)
        set('products', state.products)
    },
    preSlide(state) {
        let slide = state.slideShow
        slide.index > 0 ? slide.index -= 1 : slide.index = slide.img.length - 1
    },
    nextSlide(state) {
        let slide = state.slideShow
        slide.index !== slide.img.length - 1 ? slide.index += 1 : slide.index = 0
    },
    slideAuto() {

    },
    showLoginForm(state) {
        state.login = true
        state.create = false
    },
    hideLoginForm(state) {
        state.login = false
    },
    setCreate(state) {
        state.create = !state.create
    },
    loginSubmit(state, email, password) {
        console.log(email, password)
    },
    // createSubmit(state, event, email, password, rePassword) {
    //     let isCreate = null
    //     // Email co nhap
    //     //      + Email hop le
    //     if (email.length) {
    //         if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    //             isCreate = true
    //             state.emailMess = null
    //         }
    //         else {
    //             isCreate = null
    //             state.emailMess = 'Email not validate'
    //         }
    //     }
    //     if(!email.length) {
    //         isCreate = null
    //         state.emailMess = 'Enter your email'
    //     }

    //     // Validate password
    //     if (password.length < 6) {
    //         isCreate = null
    //         state.passwordMess = 'Password must than more 6 character'
    //     }

    //     // Validate rePassword
    //     if(!rePassword.length) {
    //         isCreate = null
    //         state.rePasswordMess = 'Enter your password again'
    //     }
    //     if(rePassword !== password) {
    //         isCreate = null
    //         state.rePasswordMess = 'Your passowrd is not same'
    //     }
    //     console.log(isCreate);
    // }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state
}