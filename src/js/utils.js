function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1
  const yDist = y2 - y1
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

function getInputValue(){
  let binary = document.querySelector("#binary").value
  return binary
}

function getText(){
     var x = document.getElementById("ctext").value;
     var pp=""
     for(var i=0;i<x;i++){
          pp+=(Math.floor(Math.random()*2));
     }
    return pp;    
}

module.exports = { randomIntFromRange, randomColor, distance , getInputValue, getText}

