const ham = document.getElementById("hamburger");
const menu = document.getElementById("h-menu");

ham.addEventListener("click", function (e) {
  if (menu.style.display == "none"){
      menu.style.display = "block"
  }
  else{
    menu.style.display = "none"
  }
})

function show(id){
  var modal = document.getElementById(id);
  modal.style.visibility="visible";
}
