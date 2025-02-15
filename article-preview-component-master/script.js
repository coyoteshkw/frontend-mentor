console.log("hello");
const card = document.querySelector(".card");
const shareBtn = document.getElementById("btn-share");
const shareBoard = document.getElementById("card-share");
console.log("---");
console.log(shareBoard);

shareBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  shareBoard.classList.add("up");
});

card.addEventListener("click", () => {
  shareBoard.classList.remove("up");
});
