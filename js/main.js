document.getElementsByClassName("open-acordeon")[0].addEventListener("click", function() {
  document.getElementsByClassName("acordeon")[0].classList.add("bottom-0");
})

document.getElementsByClassName("open-acordeon")[1].addEventListener("click", function() {
  document.getElementsByClassName("acordeon")[0].classList.remove("bottom-0");
})
/*
document.getElementsByClassName("no-bullet")[0].addEventListener("click", function() {
  document.getElementsByClassName("acordeon")[0].classList.toggle("bottom-0");
})
*/
