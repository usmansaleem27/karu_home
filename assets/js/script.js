function navbarToggle() {
    document.getElementById("myDropdown").classList.toggle("show");
    var audio = document.getElementById("audio");
     audio.play();
    
  }

  var icon = document.getElementById("icon");
  icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
  }


