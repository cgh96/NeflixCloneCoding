const loginForm = document.querySelector('.login-form');
const loginInput = document.querySelector('#id_userLoginId');
const loginLabel = document.querySelector('label[for="id_userLoginId"]');

loginForm.addEventListener('submit', e => {
    e.preventDefault();
})

//login
loginInput.addEventListener('focus', e => {
    loginLabel.style.cssText = `
        top: 20%;
        font-size: 8px;
        background-color: #4e4e4e;
    `;
    loginInput.style.cssText = `
        background-color: #4e4e4e;
    `;

});

loginInput.addEventListener('blur', e => {
    if(loginInput.value === "") {
        loginLabel.style.cssText = `
        top: 50%;
        font-size: 16px;
        background-color: #333;
    `;
    loginInput.style.cssText = `
        background-color: #333;
    `;
    }
});

//password
const passwordInput = document.querySelector('#id_password');
const passwordLabel = document.querySelector('label[for="id_password"]');
const passwordType = document.querySelector('.nf-password-toggle');

passwordInput.addEventListener('focus', e => {
    passwordLabel.style.cssText=`
        top: 20%;
        font-size: 8px;
        background-color: #4e4e4e;
    `;
    passwordInput.style.cssText = `
        background-color: #4e4e4e;
        appearence: none;
    `;

    passwordType.style.cssText = `
        visibility: visible;
    `;
})

passwordInput.addEventListener('blur', e => {
    if(passwordInput.value == "") {
        passwordLabel.style.cssText = `
        top: 50%;
        font-size: 16px;
        background-color: #333;
        `;
        passwordInput.style.cssText = `
            background-color: #333;
        `;

        passwordType.style.cssText = `
            visibility: hidden;
        `;
    }
});

passwordType.addEventListener( 'click', e => {
    if(passwordType.innerText === '숨기기') {
        passwordType.innerText = '표시';
        passwordInput.setAttribute("type", "password");
    } else {
        passwordType.innerText = '숨기기';
        passwordInput.setAttribute("type", "text");
    }


})