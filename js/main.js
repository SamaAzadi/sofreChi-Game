if (sessionStorage.getItem("restart") === "yes") {
  menuPage.className = "hide";
  SelectLevel.className = "hide";
  levelOnePage.className = "show";
  sessionStorage.removeItem("restart");
}

auMain01.play()

playBtn.onclick = function () {
  menuPage.className = "hide";
  SelectLevel.className = "show";
  auClick.play()
}
levelOne.onclick = function () {
  auClick.play()
  SelectLevel.className = "hide";
  levelOnePage.className = "show";



  auMain02.play()
  auMain01.pause()

  fillDoogh();
  moshtary1();
}
MenuTop.onclick = function () {
  auClick.play()
  levelOne.className = "hide";
  MenuSettings.className = "show";
  backMenuSettings.className = "show";
}
closeMenuSettings.onclick = function () {
  auClick.play()
  levelOne.className = "show";
  MenuSettings.className = "hide";
  backMenuSettings.className = "hide";
}


Settings.onclick = function () {
  auClick.play()

  levelOne.className = "hide";
  MenuSettings.className = "hide";

  backMenuSettings.className = "show";
  Settings01.className = "show";


}
closeSettings01.onclick = function () {
  auClick.play()
  levelOne.className = "show";
  MenuSettings.className = "show";

  backMenuSettings.className = "show";
  Settings01.className = "hide";

}

HomePage.onclick = function () {
  auClick.play()
  levelOne.className = "hide";
  MenuSettings.className = "hide";
  menuPage.className = "show";
}

MenuLevelOnePage.onclick = function () {
  auClick.play()
  MenuLevelOnePage01.className = "show"
  edame.className = "show"
}
Restart.onclick = function () {
  auClick.play();
  sessionStorage.setItem("restart", "yes");
  location.reload();
};
Continued.onclick = function () {
  auClick.play()
  MenuLevelOnePage01.className = "hide"

}
HomePage01.onclick = function () {
  auClick.play()
  MenuLevelOnePage01.className = "hide"
  menuPage.className = "show"
}
close.onclick = function () {
  auClick.play();

  MenuLevelOnePage01.className = "hide";
  levelOnePage.className = "show";
};
let diziBardashteShode = false;
let darhalPodkht = false;
let timerAmade;
let timerSokhte;

putDizi.onclick = function () {
  if (!diziBardashteShode && !siniBardashteShode && !darhalPodkht && !dooghIsUp) {
    auDizi1.play();

    clearTimeout(timerAmade);
    clearTimeout(timerSokhte);
    dizi.style.display = "block";
    darhalPodkht = true;
    dizi.className = "pokht";
    timerAmade = setTimeout(() => {
      if (darhalPodkht) {
        dizi.className = "amade";
        auDizi1.pause();
        auDizi2.play();
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
    auZobale.play();
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
      auDogh.play();
    }, 2300);
    timerFill = setTimeout(() => {
      parch1.style.display = "block";
      livan2.style.display = "block";
      parch.className = "";
    }, 8900);
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

function moshtary1() {
  setTimeout(() => {
    man.style.display = "block";
    man.className = "manCame";
  }, 8000);
  setTimeout(() => {
    woman.style.display = "block";
    woman.className = "womanCame";
  }, 14000);
}

man.addEventListener("animationend", function (e) {
  if (e.animationName === "moveMan") {
    sefaresh.style.display = "block";
    man.className = "happyMan";
  }
  else if (e.animationName === "manHappy") {
    man.className = "angryMan";
  } else if (e.animationName === "manAngry") {
    man.className = "manLeaves";
    sefaresh.style.display = "none";
  }
});

woman.addEventListener("animationend", function (e) {
  if (e.animationName === "moveWoman") {
    sefaresh1.style.display = "block";
    woman.className = "happyWoman";
  }
  else if (e.animationName === "womanHappy") {
    woman.className = "angryWoman";
  }
  else if (e.animationName === "womanAngry") {
    woman.className = "womanLeaves";
    sefaresh1.style.display = "none";
    // food.style.display = "none";
  }
  // else if (e.animationName === "moveOut") {
  //     man.style.display = "none";
  // }
});

man.onclick = function () {
  if (food.style.display === "block" && man.className !== "manCame") {
    sefaresh.style.display = "none";
    food.style.display = "none";

    siniBardashteShode = false;
    noonInSini = false;
    diziInSini = false;
    sini.className = "";

    if (man.className === "angryMan") {
      manCoin.className = "coin1";
    } else {
      manCoin.className = "coin2";
    }

    man.className = "manLeaves";
    // clientBox.style.innerHTML = -1;
  }
};


woman.onclick = function () {
  if (woman.className === "womanCame") return;

  const wantsDizi = getComputedStyle(diziWoman).display === "block";
  const wantsDoogh = getComputedStyle(dooghWoman).display === "block";

  if (food.style.display === "block" && wantsDizi) {
    food.style.display = "none";
    siniBardashteShode = false;
    noonInSini = false;
    diziInSini = false;
    sini.className = "";
    diziWoman.style.display = "none";
  } else if (doogh.style.display === "block" && wantsDoogh) {
    doogh.style.display = "none";
    dooghWoman.style.display = "none";
    dooghIsUp = false;
    livan1.style.display = "block";
    fillDoogh();
  } else {
    return;
  }

  if (getComputedStyle(diziWoman).display === "none" &&
      getComputedStyle(dooghWoman).display === "none") {
    sefaresh1.style.display = "none";
    woman.className = "womanLeaves";
  }
};