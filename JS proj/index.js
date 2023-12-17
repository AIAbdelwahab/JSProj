var  image_width = 16;
var  image_height = 16;
var  bSize = 400;

var identicalPair = 1;
var level = 1;

var leftSide= document.getElementById("left");
var rightSide = document.getElementById("right");

var boardC = document.getElementById("board");

function gameRefresh(){
    document.getElementById("levels").innerHTML = level;
     
    for(let i = -1; i<identicalPair;i++){
    let smiley = document.createElement("img");
    smiley.src = "./smiley.png";

    var randY = Math.floor(Math.random() * (bSize - image_height));
    var randX = Math.floor(Math.random() * (bSize - image_width));
    
    smiley.style.top = randY + "px";
    smiley.style.left = randX + "px";
    smiley.style.width = "50px";


    leftSide.appendChild(smiley);
    }
    let leftSideInsert = leftSide.cloneNode(true);
    rightSide.appendChild(leftSideInsert);

    
    let smiley2 = document.createElement("img");
    smiley2.src = "./smiley.png";



    var randY = Math.floor(Math.random() * (bSize - image_height));
    var randX = Math.floor(Math.random() * (bSize - image_width));

    smiley2.style.top = randY + "px";
    smiley2.style.left = randX + "px";
    smiley2.style.width = "50px";
    rightSide.appendChild(smiley2);

    rightSide.lastChild.onclick = function nextLevel(event){

        event.stopPropagation();

        removeChildren(leftSide);
        removeChildren(rightSide);

        level++;
        identicalPair++;

        gameRefresh();
    }
    
    
    



}





boardC.onclick = function gameOver(){
alert("GAME OVER");
boardC.onclick = null;
leftSide.onclick = null;



}








function removeChildren(parentNode) {
    while (parentNode.firstChild) {
      parentNode.removeChild(parentNode.firstChild);
    }
  }



