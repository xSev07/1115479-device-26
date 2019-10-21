var writeUsLink = document.querySelector(".write-us-link");

var popupWriteUs = document.querySelector(".write-us");
var close = popupWriteUs.querySelector(".modal-close");

var formWriteUs = popupWriteUs.querySelector("form");
var userName = popupWriteUs.querySelector("[name=name]");
var email = popupWriteUs.querySelector("[name=email]");
var message = popupWriteUs.querySelector("[name=message]");

writeUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.add("modal-show");
  userName.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupWriteUs.classList.remove("modal-show");
});

formWriteUs.addEventListener("submit", function (evt) {
  if (!userName.value || !validate(email.value) || !message.value) {
    evt.preventDefault();
    console.log("Нужно заполнить все поля");
  }
});

function validate(email) {
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   return reg.test(email) == false
}
