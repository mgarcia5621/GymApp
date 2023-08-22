function toggleSideNav(clickedElemnt) {
    clickedElemnt.classList.toggle("change");
    document.getElementById("mySideNav").classList.toggle("show-nav");
    document.querySelector(".overlay").classList.toggle("show");
    document.getElementById("mySideNav").classList.toggle("hide-nav");
    document.body.classList.toggle("no-scroll");
  }


let myBtn = document.getElementById('myBtn').addEventListener('click')