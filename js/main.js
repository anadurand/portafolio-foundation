document.getElementsByClassName("open-acordeon")[0].addEventListener("click", function() {
  document.getElementsByClassName("acordeon")[0].classList.add("bottom-0");
})

document.getElementsByClassName("open-acordeon")[1].addEventListener("click", function() {
  document.getElementsByClassName("acordeon")[0].classList.remove("bottom-0");
})

document.getElementsByClassName("checkout")[0].addEventListener("click", function() {
  document.getElementsByClassName("payment")[0].classList.remove("opacity-0")
})

document.getElementsByClassName("close-payment")[0].addEventListener("click", function() {
  document.getElementsByClassName("payment")[0].classList.add("opacity-0")
})

var quantity = document.getElementsByClassName("quantity")[0];
quantity.addEventListener("change", function() {
  document.getElementById("price").innerHTML = "$ " + quantity.value * 40;
  document.getElementById("subtotal").innerHTML = "$ " + quantity.value * 40;
  document.getElementById("total").innerHTML = "$ " + quantity.value * 40;
})

document.getElementsByClassName("icon-bin")[0].addEventListener("click", function(e) {
  if (e.target.parentNode){
    e.target.parentNode.style.visibility = "hidden";
  }
  document.getElementById("price").innerHTML = "$ " + 0;
  document.getElementById("subtotal").innerHTML = "$ " + 0;
  document.getElementById("total").innerHTML = "$ " + 0;
})
