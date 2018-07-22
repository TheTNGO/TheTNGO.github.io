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
    });

    /* Description Display Toggle */

    let projectDescriptionToggleButtons = document.getElementsByClassName('projectDescriptionToggle');

   
    // TODO: figure out how to make it so I'm not limited to 10 projects because of the if/else JQuery ID Selectors
    for (let i = 0; i < projectDescriptionToggleButtons.length; i++){
        projectDescriptionToggleButtons[i].addEventListener('click', function () {
            if (document.getElementsByClassName('projectDescriptionContainers')[i].style.display === "none" || document.getElementsByClassName('projectDescriptionContainers')[i].style.display === "" ) {
                $('#projDescCon' + i).slideDown(500);
            } else {
                $('#projDescCon' + i).slideUp(500);
            }
        })
    }

  
    

});

