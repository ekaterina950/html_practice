const img = document.querySelector("img");
const icons = document.querySelector(".icons");

img.onclick = function(){
  this.classList.toggle("active"); //img становится active
  icons.classList.toggle("active"); //иконки становятся active
}