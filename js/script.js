$(document).ready(function () {

    /* Nav Display Toggle */

    let navToggleButton = document.getElementById('navToggleButton');
    let mainNav = document.getElementById('main-nav');

    navToggleButton.addEventListener('click', function () {
        if (mainNav.style.display === "none") {
            $('#main-nav').slideDown(500);
        } else {
            $('#main-nav').slideUp(500);
        }
    })

})

