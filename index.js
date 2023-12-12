const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

closeBtn.addEventListener("click", function () {
  modalCloseBtn.style.display = "none";
});
