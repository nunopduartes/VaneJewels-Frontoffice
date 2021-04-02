const products = [{
    id: '',
    label: 'Beau Fleur Corrente',
    price: '€50,00',
    variants: {
        ouro: {
            size: [
                '10',
                '15',
                '20',
            ]
        },
        prata: {
            size: [
                '10',
                '15',
                '20',
            ]
        },
        aço: {
            size: [
                '10',
                '15',
                '20',
            ]
        },
    },
    src: 'assets/img/ring1.png',
},
{
    id: '',
    label: 'Amour Glamour',
    price: '€80,00',
    variants: {
        ouro: {
            size: [
                '10',
                '15',
                '20',
            ]
        },
        prata: {
            size: [
                '10',
                '15',
                '20',
            ]
        },
        aço: {
            size: [
                '10',
                '15',
                '20',
            ]
        },
    },
    src: 'assets/img/ring4.png',
},
{
    id: '',
    label: 'Beau Fleur Corrente',
    price: '€85,00',
    variants: {
        ouro: {
            size: [
                '10',
                '15',
                '20',
            ]
        },
        prata: {
            size: [
                '10',
                '15',
                '20',
            ]
        },
        aço: {
            size: [
                '10',
                '15',
                '20',
            ]
        },
    },
    src: 'assets/img/ring9.png',
},
{
    id: '',
    label: 'Beau Fleur Corrente',
    price: '€50,00',
    variants: {
        ouro: {
            size: [
                '10',
                '15',
                '20',
            ]
        },
        prata: {
            size: [
                '10',
                '15',
                '20',
            ]
        },
        aço: {
            size: [
                '10',
                '15',
                '20',
            ]
        },
    },
    src: 'assets/img/ring1.png',
},
{
    id: '',
    label: 'Amour Glamour',
    price: '€80,00',
    variants: {
        ouro: {
            size: [
                '10',
                '15',
                '20',
            ]
        },
        prata: {
            size: [
                '10',
                '15',
                '20',
            ]
        },
        aço: {
            size: [
                '10',
                '15',
                '20',
            ]
        },
    },
    src: 'assets/img/ring4.png',
},
{
    id: '',
    label: 'Beau Fleur Corrente',
    price: '€85,00',
    variants: {
        ouro: {
            size: [
                '10',
                '15',
                '20',
            ]
        },
        prata: {
            size: [
                '10',
                '15',
                '20',
            ]
        },
        aço: {
            size: [
                '10',
                '15',
                '20',
            ]
        },
    },
    src: 'assets/img/ring9.png',
},
];

makeList();

function makeList() {
let idInc = 0;

for (var i = 0; i < products.length; i++) {
    idInc++;
    products[i].id = idInc;

    let template = document.getElementById('product');
    let element = template.content.cloneNode(true);

    element.querySelector('.item').setAttribute('id', 'item:' + idInc);
    element.querySelector('.item__img').setAttribute('src', products[i].src);
    element.querySelector('.info__header').innerHTML = products[i].label;
    element.querySelector('.info__price').innerHTML = products[i].price;

    document.querySelector(".products__wrapper").append(element);
}
}