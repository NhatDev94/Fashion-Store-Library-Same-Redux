var localStore = window.localStorage

var products = [
    {
        name: 'Áo T shirt nam cổ tròn Cotton',
        price: '280.000',
        img: './img/product1.jpg',
        order : 0,
    },
    {
        name: 'Áo ba lỗ nam Cotton Compact',
        price: '190.000',
        img: './img/product2.jpg',
        order : 0,
    },
    {
        name: 'Áo nam T-shirt cổ tròn',
        price: '260.000',
        img: './img/product3.jpg',
        order : 0,
    },
    {
        name: 'Quần short nam active',
        price: '260.000',
        img: './img/product4.jpeg',
        order : 0,
    },
    {
        name: 'Áo hoodie nam',
        price: '450.000',
        img: './img/product5.jpg',
        order : 0,
    },
    {
        name: 'Áo polo nam cộc tay',
        price: '280.000',
        img: './img/product6.jpg',
        order : 0,
    },
    {
        name: 'UNI TEE',
        price: '300.000',
        img: './img/product7.jpg',
        order : 0,
    },{
        name: 'POLO TEE`',
        price: '320.000',
        img: './img/product8.jpg',
        order : 0,
    },{
        name: 'HEMRAW SKIRT',
        price: '380.000',
        img: './img/product9.jpg',
        order : 0,
    },{
        name: 'FLARED JEANS VER.2',
        price: '350.000',
        img: './img/product10.jpg',
        order : 0,
    },{
        name: 'STRAIGHT JEANS VER.2',
        price: '480.000',
        img: './img/product11.webp',
        order : 0,
    },{
        name: 'SELF-TIE SHORTS',
        price: '320.000',
        img: './img/product12.jpg',
        order : 0,
    },
]

var account = [
    {
        email : 'nhatlt219@gmail.com',
        password: 'nhat123'
    },
    {
        email : 'demo94@gmail.com',
        password: 'demo94'
    },
]


export function get(name) {
    return localStore.getItem(name) ? JSON.parse(localStore.getItem(name)) : name
}

export function set(name, args) {
    localStore.setItem(name, JSON.stringify(args))
}