function toggleSideNav(clickedElemnt) {
    clickedElemnt.classList.toggle("change");
    document.getElementById("mySideNav").classList.toggle("show-nav");
    document.querySelector(".overlay").classList.toggle("show");
    document.getElementById("mySideNav").classList.toggle("hide-nav");
    document.body.classList.toggle("no-scroll");
  }


// let myBtn = document.getElementById('myBtn').addEventListener('click')


var mpopup = document.getElementById('mpopupBox');

// Select trigger link
var mpLink = document.getElementById("mpopupLink");

// Select close action element
var close = document.getElementsByClassName("close")[0];

// Open modal once the link is clicked
mpLink.onclick = function() {
    mpopup.style.display = "block";
};

// Close modal once close element is clicked
close.onclick = function() {
    mpopup.style.display = "none";
};

// Close modal when user clicks outside of the modal box
window.onclick = function(event) {
    if (event.target == mpopup) {
        mpopup.style.display = "none";
    }
};