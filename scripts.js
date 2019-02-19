
var list = function(){

  var animals = ["dog","panda","penguin", "polar bear", "cat","lion"];
  var ul = document.createElement('ul');

  animals.forEach(function(d){
    var li = document.createElement("li");
    li.innerHTML = d;
    ul.appendChild(li);
  })

  var heading = document.getElementById("top");
  heading.after(ul);
}
