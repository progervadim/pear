new WOW().init();
$(function () {
  var Grid = function (width, height) {};
  const cartButton = document.querySelector("#cart-button");
  const modal = document.querySelector(".modal");
  
  cartButton.addEventListener("click", function (event) {
    modal.classList.add("is-open");
  });
  
});
