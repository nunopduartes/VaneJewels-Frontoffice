
feather.replace();




//SUBMIT REGISTER/LOGIN FORM

const loginOption = document.querySelector('#login__opt');
const registerOption = document.querySelector('#register__opt');
const formSelection = '';

loginOption.addEventListener("click", () => {
    if(containsQ('selected__opt', loginOption)){
        formSelection = 'login';
    } else {
        addQ('hidden', selectQ('.register__form'));
        addQ('selected__opt', loginOption);
        removeQ('selected__opt', registerOption);
        selectQ('.login__submit').textContent = 'Log in';
    };
});

registerOption.addEventListener("click", () => {
    if(containsQ('selected__opt', registerOption)){
        formSelection = 'register';
    } else {
        removeQ('hidden', selectQ('.register__form'));
        addQ('selected__opt', registerOption);
        removeQ('selected__opt', loginOption);
        selectQ('.login__submit').textContent = 'Registar';
    };
});


// CLOSE HAMBURGER MENU

const ham = selectAllQ(".toggle--menu");
const links = document.querySelector(".hamburger");
const site = document.querySelector(".root");
const main = document.querySelector(".main");

for (var i = 0; i < ham.length; i++) {
    ham[i].addEventListener("click", () => {

        site.classList.toggle("root__hamburger");
        links.classList.toggle("hamburger--active");
    });
}

// CLOSE HAMBURGER MENU BY ROOT

main.addEventListener("click", () => {
    if (containsQ("hamburger--active", links)) {
        site.classList.toggle("root__hamburger");
        links.classList.toggle("hamburger--active");
    }
});

// HEADER SCROLL

const nav = document.querySelector(".header__wrapper");
let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => {
    let currentScrollPos = window.pageYOffset;

    if ((prevScrollPos < currentScrollPos) && (currentScrollPos > 350)) {
        addQ("hide", nav);
    } else {
        removeQ("hide", nav);
    }

    prevScrollPos = currentScrollPos;
});

/* MY ACCOUNT */

const loginSlide = () => {
    const open = document.querySelector("#login");
    const openDesktop = document.querySelector(".menu__user");
    const myLogin = document.querySelector(".login");
    const close = document.querySelector(".login__close");
    const body = document.querySelector("body");

    open.addEventListener("click", () => {
        if (!user.active == 1) {
            myLogin.classList.toggle("login--active");
            body.classList.toggle("fixed--body");
        }
    });

    openDesktop.addEventListener("click", () => {
        if (!user.active == 1) {
            myLogin.classList.toggle("login--active");
            body.classList.toggle("fixed--body");
        }
    });

    close.addEventListener("click", () => {
        myLogin.classList.toggle("login--active");
        body.classList.toggle("fixed--body");
    });
};

loginSlide();

// SEARCH

const searchSlide = () => {
    const links = document.querySelector(".search");

    selectAllQ(".menu__search").forEach(function(item) {
        item.addEventListener("click", () => {
            links.classList.toggle("search--active");
        });
    });
};

searchSlide();

// SEARCH CLOSE

const searchCloseSlide = () => {
    const searchClose = document.querySelector(".search__close");
    const links = document.querySelector(".search");

    searchClose.addEventListener("click", () => {
        links.classList.toggle("search--active");
    });
};

searchCloseSlide();

// Footer dropdown

var x = selectAllQ(".footer__dropdown");
var y = selectAllQ(".footer--drop");

for (var i = 0; i < x.length; i++) {
    x[i].addEventListener("click", toggleTask);
}

function toggleTask(event) {
    var node = event.target.parentNode;
    var subnode = event.target.childNodes[2];
    console.log(subnode);

    if (containsQ("footer--drop", subnode)) {
        subnode.classList.toggle("footer--active");
    }
}

/*             HAMBURGER          */

var menuLinks = selectAllQ(".hamburger__link");
for (var count = 0; count < menuLinks.length; count++) {
    menuLinks[count].addEventListener("click", function(event) {
        let currentNode = event.target;
        if (containsQ("active--link", currentNode) && containsQ("hamburger__link", event.target)) {
            selectAllQ(".active--link").forEach(function(node) {
                removeQ("active--link", node);
            });
        } else if (containsQ("hamburger__link", event.target)) {
            selectAllQ(".active--link").forEach(function(node) {
                removeQ("active--link", node);
            });

            addQ("active--link", currentNode);
        }
    })
}

function selectQ(query, element) {
    element = elementValidator(element);
    return element.querySelector(query);
}

function selectAllQ(query, element) {
    element = elementValidator(element);
    return element.querySelectorAll(query);
}

function removeQ(query, parent, element) {
    element = elementValidator(element);
    return parent.classList.remove(query);
}

function containsQ(query, parent, element) {
    element = elementValidator(element);
    return parent.classList.contains(query);
}

function addQ(query, parent, element) {
    element = elementValidator(element);
    return parent.classList.add(query);
}

function elementValidator(element) {
    if (!element) element = document;
    return element;
}