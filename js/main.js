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

putDizi.onclick = function(){
  if(!diziBardashteShode){
    dizi.style.display = "block";
  dizi.className = "pokht";
  setTimeout(()=>{
    dizi.className = "amade";
  },8000)
  setTimeout(()=>{
    dizi.className = "sokhte";
  },18000)
  }
}

dizi.onclick = function(){
  if(dizi.className === "amade"){
    diziBardashteShode = true;
    dizi1.style.display = "block";
    dizi.style.display = "none";
    document.addEventListener("mousemove", function(e) {
    dizi1.style.left = e.clientX + "px";
    dizi1.style.top = e.clientY + "px";
});
  }else if(dizi.className === "sokhte"){
    diziBardashteShode = true;
    dizi2.style.display = "block";
    dizi.style.display = "none";
    document.addEventListener("mousemove", function(e) {
    dizi2.style.left = e.clientX + "px";
    dizi2.style.top = e.clientY + "px";
});
  }
}

zobale.onclick = function(){
  dizi1.style.display = "none";
  dizi2.style.display = "none";
  diziBardashteShode = false;
}
