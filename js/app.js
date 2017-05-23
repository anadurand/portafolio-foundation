/*
if (document.getElementsByClassName("off-canvas")[0].getAttribute("aria-hidden")) {
}
if (document.getElementById("buy").getAttribute("aria-expanded")) {
  document.getElementsByClassName("black-all")[0].classList.add("visible");
}
*/

document.getElementById("img1").addEventListener("mouseover",imgEventHandler);
document.getElementById("img2").addEventListener("mouseover",imgEventHandler);
document.getElementById("img3").addEventListener("mouseover",imgEventHandler);
document.getElementById("img4").addEventListener("mouseover",imgEventHandler);

function imgEventHandler(e){
	var srcImg = e.target.src.substr(96);
	var img1 = document.getElementById("img1-proyectada");
	var img2 = document.getElementById("img2-proyectada");
	img1.src = srcImg;
	img2.src = srcImg;
}



/*
document.getElementById("buy").addEventListener("click", function(e) {
  document.getEle.indexOf()mentsByClassName("black-all")[0].classList.toggle("visible");
});
*/



$(document).foundation()

//show black modal
/*
if (document.getElementsByClassName("is-open")) {
    document.getElementsByClassName("black-all")[0].classList.add("visible");
}
else {
  document.getElementsByClassName("black-all")[0].classList.remove("visible");
}
*/
