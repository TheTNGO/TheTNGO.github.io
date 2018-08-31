$(document).ready(function () {

    /* Nav Display Toggle */

    // let navToggleButton = document.getElementById('navToggleButton');
    // let mainNav = document.getElementById('main-nav');

    // navToggleButton.addEventListener('click', function () {
    //     if (mainNav.style.display === "none") {
    //         $('#main-nav').slideDown(500);
    //     } else {
    //         $('#main-nav').slideUp(500);
    //     }
    // });

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

    /* Project Image Carousel */

        // // Image URLs
        // const slides = [
        //     'project-fortune-teller-final.jpg',
        //     'reviews-final.JPG',
        //     'virtual-pets-amok-final.jpg',
        // ];

        // // Index of currently displayed URL
        // let currentIndex = 0;

        // // Empty until later: a reference to our interval to rotate
        // // through images... storing it in a variable allows us to
        // // cancel it whenever we want
        // let rotation;

        // // DOM Components
        // const prev = document.querySelector('#pCarouselPrevButton');
        // const next = document.querySelector('#pCarouselNextButton');
        // const view = document.querySelector('#pCarouselView');
        // const imgs = document.querySelector('#pCarouselImgs');

        // // Img Rotation Engine
        // for (let i = 0; i < slides.length; i++) {

        //     // Create the <img> element
        //     let imgUrl = slides[i];
        //     const img = document.createElement('img');
        //     img.setAttribute('src', './images/' + imgUrl);
        //     imgs.appendChild(img);
        
        //     // When preview is clicked, display that image
        //     img.addEventListener('click', function() {
        //     currentIndex = i;
        //     showSlide();
        //     clearInterval(rotation);
        //     });
        // }

        // // Previous Button
        // prev.addEventListener('click', function() {
        //     prevSlide();
        //     clearInterval(rotation);
        // });

        // // Next Button
        // next.addEventListener('click', function() {
        //     nextSlide();
        //     clearInterval(rotation);
        // });

        // // Display slide in view based on value of currentIndex
        // function showSlide() {
        //     view.innerHTML = '';
        //     const imgUrl = slides[currentIndex];
        //     const img = document.createElement('img');
        //     img.setAttribute('src', './images/' + imgUrl);
        //     view.appendChild(img);
        // }

        
        // function prevSlide() {
        //     currentIndex--;
        //     if (currentIndex < 0) {
        //         currentIndex = slides.length - 1;
        //     }
        //     showSlide();
        // }

        // function nextSlide() {
        //     currentIndex++;
        //     if (currentIndex === slides.length) {
        //         currentIndex = 0;
        //     }
        //     showSlide();
        // }

        // showSlide();

        // rotation = setInterval(function() {
        //     nextSlide();
        // }, 10000);

    /* Front End "whatis" modal */

        var frontEndModal = document.getElementById('techStackFrontEndModal');
        var frontEndAboutBtn = document.getElementById("front-end-modal-button");
        var frontEndClose = document.getElementById("frontEndClose");

        // Button to activate modal 
        frontEndAboutBtn.onclick = function() {
            frontEndModal.style.display = "flex";
        }

        // Close Button
        frontEndClose.onclick = function() {
            frontEndModal.style.display = "none";
        }

    /* Back End "whatis" modal */

        var backEndModal = document.getElementById('techStackBackEndModal');
        var backEndAboutBtn = document.getElementById("back-end-modal-button");
        var backEndClose = document.getElementById("backEndClose");

        // Button to activate modal 
        backEndAboutBtn.onclick = function() {
            backEndModal.style.display = "flex";
        }

        // Close Button
        backEndClose.onclick = function() {
            backEndModal.style.display = "none";
        }    
    

});
