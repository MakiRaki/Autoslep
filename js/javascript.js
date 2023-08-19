
anime.timeline({loop: true})
    .add({
        targets: '.moving-letters .words',
        scale: [14,1],
        opacity: [0,1],
        easing: "easeOutCirc",
        duration: 800,
        delay: (el, i) => 800 * i
    }).add({
    targets: '.moving-letters',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 3000
})

/* Gallery */

// This the index of the photo we are currently displaying
var current = 0;

/* Function is diplayoing previous or next photo depending on the index that is past
  -1 for the previouse photo, 1 for the next photo
*/
function nextPhoto(n) {
    showPhoto(current += n);
}

// Sedtting the photo
function setPhoto(n) {
    //Current index is stored here
    current = n;
    // Shows photo
    showPhoto(n);
}

function showPhoto(n) {

    var photos = document.getElementsByClassName("photo");  // Returns array of main gallery photos
    var thumbnails = document.getElementsByClassName("thumbnail"); // Returns array of thumbnail photos
    var title = document.getElementById("title");

    // If the index of the photo that we are showing is greater then array lenght, it shows the first photo
    if (n > photos.length-1) {
        current = 0;
    }

    //If the index of the photo we are showing is less then array lenght, it shows the last photo
    if (n < 0) {
        current = photos.length-1;
    }

    // Hidding photos
    for (var i = 0; i < photos.length; i++) {
        photos[i].style.display = "none";
    }

    // Going through the array of thumbnail photos and deleting "active" from their class name
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }

    // Current photo is set to be visible and active in thumbnail
    photos[current].style.display = "block";
    thumbnails[current].className += " active";
    title.innerHTML = thumbnails[current].alt;
}

// Form validation
(function () {
    'use strict'
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', function (event) {

        // Success message
        var div = document.getElementById("form-message-success");

        if( div.style.display == "inline" ){
            div.style.display = ""; 
        }

        if (!form.checkValidity()) {  // Checking form validation and setting inputs that are valid to valid, a others to invalid
            event.preventDefault()
            event.stopPropagation()

            document.getElementById("contact").scrollIntoView();
        }

          form.classList.add('was-validated')
        }, false);
      
})()



