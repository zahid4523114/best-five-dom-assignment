//player-1-btn
document.getElementById("player-btn-1").addEventListener("click", function () {
  setListElementById("all-list-element", "Neymar Jr");
  buttonDisabled("player-btn-1");
});
//player-2-btn
document.getElementById("player-btn-2").addEventListener("click", function () {
  setListElementById("all-list-element", "Kylian Mbappé");
  buttonDisabled("player-btn-2");
});
//player-3-btn
document.getElementById("player-btn-3").addEventListener("click", function () {
  setListElementById("all-list-element", "Lionel Messi");
  buttonDisabled("player-btn-3");
});
//player-4-btn
document.getElementById("player-btn-4").addEventListener("click", function () {
  setListElementById("all-list-element", "Sergio Ramos");
  buttonDisabled("player-btn-4");
});
//player-5-btn
document.getElementById("player-btn-5").addEventListener("click", function () {
  setListElementById("all-list-element", "Renato Sanches");
  buttonDisabled("player-btn-5");
});
//player-6-btn
document.getElementById("player-btn-6").addEventListener("click", function () {
  setListElementById("all-list-element", "Vítor Machado");
  buttonDisabled("player-btn-6");
});
//per player pricing calculation
document.getElementById("calculate").addEventListener("click", function () {
  perPlayerPriceCalculation();
});
//calculate total
document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    calculateTotalAmount();
  });
