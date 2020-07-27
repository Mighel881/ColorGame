let newBtn = document.querySelector("#newBtn");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");
let btns = document.querySelectorAll("#actionBar span");
let pickedColorDisplay = document.querySelector("#pickedColorDisplay");
let header = document.querySelector(".header");

let tiles
let color;
let chosenIndex;
let isHard = false;
newGame();


newBtn.addEventListener("click", function(){
  newGame();
});

easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("btnSelected");
  hardBtn.classList.remove("btnSelected");
  isHard = false;
  newGame();
});
hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("btnSelected");
  easyBtn.classList.remove("btnSelected");
  isHard = true;
  newGame();
});



function newGame(){
  header.style.backgroundColor = "steelblue";
  if(isHard == false){
    document.querySelector("#hardRow").style.display = "none"
    tiles = document.querySelectorAll("#easyRow .tile");
  }else{
    document.querySelector("#hardRow").style.display = "flex"
    tiles = document.querySelectorAll(".gameScreen .tile");
  }
  color = "rgb(" + rnd(255) + ", " + rnd(255) + ", " + rnd(255) + ")";
  pickedColorDisplay.innerText = color;
  chosenIndex = rnd(tiles.length-1);
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].classList.remove("hidden");
    if(chosenIndex === i){
      tiles[i].style.backgroundColor = color;
    }else{
      tiles[i].style.backgroundColor = "rgb(" + rnd(255) + ", " + rnd(255) + ", " + rnd(255) + ")";
    }
    tiles[i].addEventListener("click", function(){
      if(this.style.backgroundColor === color){
        won()
      }else{
        this.classList.add("hidden");
      }
    });
  }
}

function won(){
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].classList.remove("hidden");
    tiles[i].style.backgroundColor = color;
  }
  header.style.backgroundColor = color;
}

function rnd(max){
    return Math.floor(Math.random()*(max+1));
}
