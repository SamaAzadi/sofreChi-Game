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

let diziBardashteShode = false;
let darhalPodkht = false;
let timerAmade;
let timerSokhte;

putDizi.onclick = function () {
  if (!diziBardashteShode && !siniBardashteShode && !darhalPodkht) {
    clearTimeout(timerAmade);
    clearTimeout(timerSokhte);
    dizi.style.display = "block";
    darhalPodkht = true;
    dizi.className = "pokht";
    timerAmade = setTimeout(() => {
      if (darhalPodkht) {
        dizi.className = "amade";
      }
    }, 8000);

    timerSokhte = setTimeout(() => {
      if (darhalPodkht) {
        dizi.className = "sokhte";
      }
    }, 18000);
  }
}

dizi.onclick = function () {
  if (dizi.className === "amade") {
    clearTimeout(timerAmade);
    clearTimeout(timerSokhte);
    diziBardashteShode = true;
    darhalPodkht = false;
    dizi.style.display = "none";
    dizi.className = "";
    move(dizi1);
  } else if (dizi.className === "sokhte") {
    clearTimeout(timerAmade);
    clearTimeout(timerSokhte);
    darhalPodkht = false;
    diziBardashteShode = true;
    dizi.style.display = "none";
    dizi.className = "";
    move(dizi2);
  }
}

zobale.onclick = function () {
  dizi1.style.display = "none";
  dizi2.style.display = "none";
  diziBardashteShode = false;
  siniBardashteShode = false;
  sini.className = "";
  noonInSini = false;
  diziInSini = false;
  dizi3.style.display = "none";
  noon1.style.display = "none";
  food.style.display = "none";
}

let noonInSini = false;
let diziInSini = false;
let siniBardashteShode = false;

noon.onclick = function () {
  if (!diziBardashteShode) {
    if (diziInSini) {
      sini.className = "full";
      noonInSini = true;
    } else {
      sini.className = "noonOn";
      noonInSini = true;
    }
  }
}

sini.onclick = function () {
  if (dizi1.style.display == "block") {
    if (noonInSini) {
      sini.className = "full";
      diziInSini = true;
      dizi1.style.display = "none";
      diziBardashteShode = false;
    } else {
      sini.className = "diziOn";
      diziInSini = true;
      dizi1.style.display = "none";
      diziBardashteShode = false;
    }
  } else {
    if (noonInSini && diziInSini) {
      sini.className = "khali";
      move(food);
      diziInSini = true;
      siniBardashteShode = true;
    } else if (noonInSini) {
      sini.className = "khali";
      move(noon1);
      siniBardashteShode = true;

    } else if (diziInSini) {
      sini.className = "khali";
      move(dizi3);
      siniBardashteShode = true;
    }
  }
}

function move(x) {
  x.style.display = "block";
  document.addEventListener("mousemove", function (e) {
    x.style.left = e.clientX + "px";
    x.style.top = e.clientY + "px";
  });
}