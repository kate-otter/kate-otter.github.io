// модалка напишите нам
var popup = document.querySelector(".modal-write-us");

if(popup != undefined){
  var link = document.querySelector(".button-write-us");
  var close = popup.querySelector(".modal-close");

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });
}



// модалка - карта
var mapLink = document.querySelector(".map");

if(mapLink != undefined){
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
        mapPopup.classList.remove("modal-show");
      }
    }
  });
}

// модалка - "каталог" - купить 

var basketPopup = document.querySelector(".modal-basket");

if(basketPopup != undefined){
  
  var basketLinks = document.querySelectorAll(".button-buy");

  var basketClose = basketPopup.querySelector(".modal-close");

  var basketContinue = basketPopup.querySelector(".button-basket-continue");

  for(var i=0; i < basketLinks.length; i++){
    basketLinks[i].addEventListener("click", function (evt){
      evt.preventDefault();
      basketPopup.classList.add("modal-show");
    })
  };

  basketClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.remove("modal-show");
  });

  basketContinue.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (basketPopup.classList.contains("modal-show")) {
        basketPopup.classList.remove("modal-show");
      }
    }
  });
}