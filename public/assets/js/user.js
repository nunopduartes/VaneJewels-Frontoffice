const user = {
    email: 'okok',
    password: 'okok',
    active: 0,
}


document.querySelector(".login__submit").addEventListener("click", function () {
    let emailInput = document.querySelector(".login__email").value;
    let passwordInput = document.querySelector(".login__password").value;

    if (emailInput == '') {
        alert("Necessita de colocar um email");
    } else if (passwordInput == '') {
        alert("Necessita de colocar a sua password");
    } else {
        user.email = emailInput;
        user.password = passwordInput;
        user.active = 1;
        console.log(user);
        //document.querySelector('.login').classList.remove("login--active");
    }

    const form = document.querySelector('form');
    const email = selectQ(".login__email");
    const password = selectQ(".login__password");
    const nome = selectQ(".login__name");
    const age = selectQ(".login__age");
    const register = selectQ(".register__form");

    let formData = new FormData(form);

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!containsQ("hidden", register)) {
            fetch('https://vanejewel-backoffice.herokuapp.com/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: nome.value,
                    age: age.value,
                    email: email.value,
                    password: password.value,

                })
            }).then((response) => {
                if(response.ok) {
                    window.location.href = "https://vanejewel-frontoffice.herokuapp.com/produtos" 
                } else {
                    return response.json();
                }
            }).then((data) => {
                selectQ('.login__error').textContent = data.msg;
            }).catch((e) => {
                return e;
            });
        } else {
            fetch('https://vanejewel-backoffice.herokuapp.com/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "email": email.value,
                    "password": password.value,
                })
            }).then(response => {
                if (response.ok) {
                    window.location.href = "https://vanejewel-frontoffice.herokuapp.com/produtos"
                } else {
                    return response.json();
                }
            }).then((data) => {
                selectQ('.login__error').textContent = data.error;
            }).catch((e) => {
                return e;
            });
        }
    });

});