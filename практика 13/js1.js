const captcha = document.querySelector(".captcha"),
reloadBtn = document.querySelector(".reloadBtn"),
inputField = document.querySelector(".inputArea input"),
checkBtn = document.querySelector(".checkBtn"),
statusTxt = document.querySelector(".statusText");

let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//генерирует последовательность из 6 раномных символов
function getCaptcha() {
  for (let i = 0; i < 6; i++) {
    let random = arr[Math.floor(Math.random() * arr.length)];
    captcha.innerText += `${random}`;
  }
}

//возвращает к дефолтному состоянию
function clear(){
  inputField.value = "";
  captcha.innerText = "";
  statusTxt.style.display = "none";
}

getCaptcha();

reloadBtn.addEventListener("click", ()=> { 
  clear(); 
  getCaptcha(); 
});

checkBtn.addEventListener("click", e => {
  e.preventDefault(); //иначе при нажатии на кнопку появляются side-эффекты дефолтного поведения
  statusTxt.style.display = "block";
  
  let inputValue = inputField.value;

  if(inputValue == captcha.innerText) { //Если введенный паттерн совпадает с капчей
    statusTxt.style.color = "lime";
    statusTxt.innerText = "Perfect! You are not a robot.";
    setTimeout( ()=> { clear(); getCaptcha(); }, 3000);
  } else {
    statusTxt.style.color = "red";
    statusTxt.innerText = "Your pattern is wrong. Please try again!";
    }
});