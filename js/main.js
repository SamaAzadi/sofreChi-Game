playBtn.onclick = function () {
  menuPage.className = "hide";
  levelOnePage.className = "show";
  fillDoogh();
}

let diziBardashteShode = false;
let darhalPodkht = false;
let timerAmade;
let timerSokhte;

putDizi.onclick = function () {
  if (!diziBardashteShode && !siniBardashteShode && !darhalPodkht && !dooghIsUp) {
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
  if (dizi.className === "amade" && !dooghIsUp) {
    clearTimeout(timerAmade);
    clearTimeout(timerSokhte);
    diziBardashteShode = true;
    darhalPodkht = false;
    dizi.style.display = "none";
    dizi.className = "";
    move(dizi1);
  } else if (dizi.className === "sokhte" && !dooghIsUp) {
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
  if (!dooghIsUp) {
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
}

let noonInSini = false;
let diziInSini = false;
let siniBardashteShode = false;

noon.onclick = function () {
  if (!diziBardashteShode && !dooghIsUp && !siniBardashteShode) {
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
    if (!dooghIsUp) {
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
}

let timerDoogh;
let timerFill;
let dooghIsUp = false;

function fillDoogh() {
  if (!dooghIsUp) {
    timerDoogh = setTimeout(() => {
      parch1.className = "Up";
    }, 300);
    timerFill = setTimeout(() => {
      parch1.style.display = "none";
      livan1.style.display = "none";
      parch1.className = "";
      parch.className = "fill";
    }, 2300);
    timerFill = setTimeout(() => {
      parch1.style.display = "block";
      livan2.style.display = "block";
      parch.className = "";
    }, 8300);
  }
}

livan2.onclick = function () {
  if (!diziBardashteShode && !siniBardashteShode) {
    move(doogh);
    livan2.style.display = "none";
    dooghIsUp = true;
  }
}

function move(x) {
  x.style.display = "block";
  document.addEventListener("mousemove", function (e) {
    x.style.left = e.clientX + "px";
    x.style.top = e.clientY + "px";
  });
}