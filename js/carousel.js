function carouselNext(id){
  var list = document.getElementById(id).querySelectorAll("ol li");
  var length = list.length;
  var current;
  for (var i = 0; i < length; i++)
  {
    if(list[i].getAttribute("class") == "current")
    {
      current = i;
      list[i].setAttribute("class","");
      break;
    }
  }
  if (++current >= length)
  {
    current = 0;
  }
  list[current].setAttribute("class","current");
  ticks = 0;
}

function carouselPrevious(id){
  var list = document.getElementById(id).querySelectorAll("ol li");
  var length = list.length;
  var current;
  for (var i = 0; i < length; i++)
  {
    if(list[i].getAttribute("class") == "current")
    {
      current = i;
      list[i].setAttribute("class","");
      break;
    }
  }
  if (--current < 0)
  {
    current = length-1;
  }
  list[current].setAttribute("class","current");
  ticks = 0;
}

var ticks = 0;
setInterval(function(){
  if(++ticks >= 4)
  {
    ticks = 0;
    carouselNext("cases");
  }
  carouselNext("models");
},5000);
