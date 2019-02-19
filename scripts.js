
var list = function(){

  var animals = ["dog","panda","penguin", "polar bear", "cat","lion"];
  var ul = document.createElement('ul');

  for(var i=0;i<animals.length;i++){
    var li = document.createElement("li");
    li.innerHTML = animals[i];
    ul.appendChild(li);
  }
  var heading = document.getElementById("top");
  heading.after(ul);
}
