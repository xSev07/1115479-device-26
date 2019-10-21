var writeUsLink = document.querySelector(".write-us-link");

var popupWriteUs = document.querySelector(".write-us");
var close = popupWriteUs.querySelector(".modal-close");

var formWriteUs = popupWriteUs.querySelector("form");
var userName = popupWriteUs.querySelector("[name=name]");
var email = popupWriteUs.querySelector("[name=email]");
var message = popupWriteUs.querySelector("[name=message]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("userName");
} catch (err) {
  isStorageSupport = false;
}

writeUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.add("modal-show");

  if (storage) {
      userName.value = storage;
      email.value = localStorage.getItem("email");
  } else {
    userName.focus();
  }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupWriteUs.classList.remove("modal-show");
    popupWriteUs.classList.remove("modal-error");
});

formWriteUs.addEventListener("submit", function (evt) {
  if (!userName.value || validate(email.value) || !message.value) {
    evt.preventDefault();
    popupWriteUs.classList.remove("modal-error");
    popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
    popupWriteUs.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("email", email.value);
    }
  }
});

function validate(email) {
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   return reg.test(email) == false;
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupWriteUs.classList.contains("modal-show")) {
      popupWriteUs.classList.remove("modal-show");
      popupWriteUs.classList.remove("modal-error");
    }
  }
});

var mapLink = document.querySelector(".map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

var sliderControls = document.querySelectorAll(".slider-button");
for (var i = 0; i < sliderControls.length; i++) {
  sliderControls[i].addEventListener("click", function (evt) {
    console.log("click");
    sliderControls[i].classList.add("active");
  })
}
