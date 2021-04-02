const cart = [];

let addCart = document.querySelectorAll(".item__add");

for (let i = 0; i < addCart.length; i++) {
    addCart[i].addEventListener("click", function() {
        cart.push(products[i]);
        console.log(cart);
        updateCart(i);
    });
};

function updateCart(i) {

    selectAllQ(".cart__counter").forEach(function(item) {
        console.log("entrou");
        console.log(cart.length);
        item.innerHTML = cart.length;
        document.querySelector(".cart__counter").classList.add("cart__anim");
    });

    let template = document.getElementById('product');
    let element = template.content.cloneNode(true);

    element.querySelector('.item').setAttribute('id', 'item:' + products[i].id);
    element.querySelector('.item__img').setAttribute('src', products[i].src);
    element.querySelector('.info__header').innerHTML = products[i].label;
    element.querySelector('.info__price').innerHTML = products[i].price;

    let cartWrapper = selectAllQ(".cart");
    cartWrapper.forEach(function(item) {
        item.classList.add("cart--active");
        let cartContainer = selectAllQ(".cart__wrapper");

        cartContainer.forEach(function(cartBag) {
            cartBag.append(element);
            console.log(cartBag);
            setTimeout(function() {
                selectQ(".cart").classList.remove("cart--active");
            }, 4000);
        });
    });
}