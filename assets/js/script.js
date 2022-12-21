
function navbarToggle() {
    document.getElementById("myDropdown").classList.toggle("show");
    var audio = document.getElementById("audio");
     audio.play();
  }

  var icon = document.getElementById("icon");
  icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
      icon.classList = "bi bi-moon-stars-fill fs-3"
    }
    else(
      icon.classList = "bi bi-brightness-high-fill fs-3"
    )
  }


