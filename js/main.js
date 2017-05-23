//Mouse over para detalle
document.getElementById("img1").addEventListener("mouseover",imgEventHandler);
document.getElementById("img2").addEventListener("mouseover",imgEventHandler);
document.getElementById("img3").addEventListener("mouseover",imgEventHandler);
document.getElementById("img4").addEventListener("mouseover",imgEventHandler);

function imgEventHandler(e){
  var srcImg = e.target.src.substr(75);
  console.log(srcImg);
  var img1 = document.getElementById("img1-proyectada");
  var img2 = document.getElementById("img2-proyectada");
  img1.src = srcImg;
  img2.src = srcImg;
}

//Acordeon cart-footer
document.getElementsByClassName("open-acordeon")[0].addEventListener("click", function() {
  document.getElementsByClassName("acordeon")[0].classList.add("bottom-0");
})

document.getElementsByClassName("open-acordeon")[1].addEventListener("click", function() {
  document.getElementsByClassName("acordeon")[0].classList.remove("bottom-0");
})

//Checkout button
document.getElementsByClassName("checkout")[0].addEventListener("click", function() {
  document.getElementsByClassName("payment")[0].classList.remove("opacity-0")
})

document.getElementsByClassName("close-payment")[0].addEventListener("click", function() {
  document.getElementsByClassName("payment")[0].classList.add("opacity-0")
})

//Imprimir precio
var quantity = document.getElementsByClassName("quantity")[0];
quantity.addEventListener("change", function() {
  document.getElementById("price").innerHTML = "$ " + quantity.value * 40;
  document.getElementById("subtotal").innerHTML = "$ " + quantity.value * 40;
  document.getElementById("total").innerHTML = "$ " + quantity.value * 40;
})

//"Eliminar" compra
document.getElementsByClassName("icon-bin")[0].addEventListener("click", function(e) {
  if (e.target.parentNode){
    e.target.parentNode.style.visibility = "hidden";
  }
  document.getElementById("price").innerHTML = "$ " + 0;
  document.getElementById("subtotal").innerHTML = "$ " + 0;
  document.getElementById("total").innerHTML = "$ " + 0;
})
