
const vidStart = document.getElementById("vidStart");
const menuPage = document.getElementById("menuPage");
const levelPage = document.getElementById("levelPage");
const playBtn = document.getElementById("playBtn");

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(function (page) {
        page.classList.add("hide");
    });

    document.getElementById(pageId).classList.remove("hide");
}

vidStart.addEventListener("ended", function () {
    vidStart.style.display = "none";
    showPage("menuPage");
});

playBtn.addEventListener("click", function () {
    console.log("Play clicked");
    showPage("levelPage");
});
