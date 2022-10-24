let emailInput = document.querySelector("#email-address");
let emailLabel = document.querySelector('label[for="email-address"]');
let emailGuide = document.createElement("div");
let emailDiv = document.querySelector(".email");
let emailForm = document.querySelector(".email-form");

emailGuide.innerText="이메일 주소를 입력해주세요.";
emailGuide.style.color="#FFA00A";
emailGuide.style.textAlign="left";
emailGuide.style.margin="0 0 0 110px";

//email 입력창에 focus 발생 시, "이메일 주소를 입력해주세요." 안내멘트
emailInput.addEventListener('focus', e => {
    emailLabel.style.fontSize = "12px";
    emailLabel.style.top = "-23px";
    emailDiv.append(emailGuide); 
    emailInput.style.margin="0 0 0 41px";
});


/**
  email 입력창 focus 해제 시,
  입력창이 비어있다면 원래 상태로 돌아옴.
  입력창에 값이 입력되어있다면 현재 상태 유지.
 */
emailInput.addEventListener('blur', e => {
    if(emailInput.value.length === 0) {
        emailLabel.style.fontSize = "16px";
        emailLabel.style.top = "-2px";
        emailInput.style.margin="0 0 0 20px";
        emailDiv.removeChild(emailGuide);
    }
})


emailForm.addEventListener('submit', e => {
    e.preventDefault();
})
