var randomName = function() {
  var arry = ["Kevin", "John", "Mabel", "Lucy", "Isabella", "Ryan", "Clyde"];
  var random = arry[Math.floor(Math.random() * arry.length)];
  return random;
};

// create button
var container = document.getElementsByClassName("button")[0];
var button = document.createElement("input");
  button.type = "submit";
  button.value = "click me!";
  button.setAttribute("id", "btn");

container.appendChild(button);

// initialize function
window.onload = function() {
// add event listener
  document.getElementById("btn").addEventListener("click", function(e) {
  document.getElementById("name").innerHTML = randomName();
    }   
  );
};


