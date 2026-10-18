const menuPage = document.getElementById("menuPage");
const levelOnePage = document.getElementById("levelOnePage");
const playBtn = document.getElementById("playBtn");

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(function (page) {
    page.classList.add("hide");
  });

  document.getElementById(pageId).classList.remove("hide");
}

playBtn.addEventListener("click", function () {
  console.log("Play clicked");
  showPage("levelOnePage");
});