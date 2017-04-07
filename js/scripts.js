//Business Logic

function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.pizzaCost = function() {
  var cost = 0;

  if (this.topping === "topping1"){
    cost += 1;
  } else if (this.topping === "topping2") {
    cost += 2;
  } else if (this.topping === "topping3") {
    cost += 3;
  }

  if (this.size === "small") {
    cost += 5;
  } else if (this.size === "medium") {
    cost += 10;
  } else if (this.size === "large") {
    cost += 15;
  }
  return cost;
}




//User Logic
$(document).ready(function(){
  $("#pizza").submit(function(event){
    event.preventDefault();
    var nameInput = $("#name").val();
    var toppingInput = $("#topping").val();
    var sizeInput = $("#size").val();

    var newPizza = new Pizza(toppingInput, sizeInput);

    // console.log(newPizza.pizzaCost());
    $(".cost-show").show();


    $(".name").text(nameInput);
    $(".price").text(newPizza.pizzaCost());

    $("#name").val("");

  });
});
