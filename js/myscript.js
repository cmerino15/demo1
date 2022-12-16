function ban(){
  let x = null;
  let elem = document.getElementById("banner");
  let sx = 0;
  clearInterval(x);
  x = setInterval(frame,5);
  function frame(){
    if(sx == 500){
     clearInterval(x);
  }else{
    sx++;
    elem.style.left = sx + "px";
  }
  }
}



function inv(){

  var img = document.getElementById('inv');
  img.src = "resources/anditsgone.jpg";

}