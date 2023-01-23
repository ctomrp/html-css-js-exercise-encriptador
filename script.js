const INPUT_TEXT = document.getElementById("textInput");
const OUTPUT_TEXT = document.getElementById("textOutput");
const BTN_ENCPRYT = document.getElementById("btnEncrypt");
const BTN_DECRYPT = document.getElementById("btnDecrypt");
const BTN_COPY = document.getElementById("btnCopy");
const CHANGE_TITLE = document.getElementById("pageTitle");
const THEME = document.getElementById("theme");
const BODY = document.querySelector("body");

CHANGE_TITLE.addEventListener("mouseover", () => CHANGE_TITLE.innerHTML = "Encrimesptaidoberr");

CHANGE_TITLE.addEventListener("mouseout", () => CHANGE_TITLE.innerHTML = "Encriptador");

THEME.addEventListener("click", (e) => {BODY.classList.toggle("dark")});

function checkOutput(){
  if (INPUT_TEXT.value > ""){
    document.getElementById("empty-text").style.display = "none";
    document.getElementById("empty-img").style.display = "none";
    document.getElementById("textOutput").style.display = "grid";
    document.getElementById("btn2").style.display = "flex";
    document.getElementById("btnCopy").style.display = "block";
    return;
  }
}

BTN_ENCPRYT.addEventListener("click", () => {
    let message = INPUT_TEXT.value;
    const RE_VOCAL = [/e/g, /i/g, /a/g, /o/g, /u/g];
    const ENCRYPTED = ["enter", "imes", "ai", "ober", "ufat"];
    for (let i = 0; i < RE_VOCAL.length; i++) {
      message = message.replace(RE_VOCAL[i], ENCRYPTED[i]);
    }
    checkOutput();
    return (OUTPUT_TEXT.innerHTML = message);
  }
);

BTN_DECRYPT.addEventListener("click", () => {
    let message = INPUT_TEXT.value;
    const RE_ENCRYPTED = [/enter/g, /imes/g, /ai/g, /ober/g, /ufat/g];
    const VOCAL = ["e", "i", "a", "o", "u"];
    for (let i = 0; i < RE_ENCRYPTED.length; i++) {
      message = message.replace(RE_ENCRYPTED[i], VOCAL[i]);
    }
    checkOutput();
    return (OUTPUT_TEXT.innerHTML = message);
  }
);

BTN_COPY.addEventListener("click", () => {navigator.clipboard.writeText(OUTPUT_TEXT.innerHTML)});