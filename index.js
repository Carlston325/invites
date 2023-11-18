let arrowButton = $(".arrow-button")
let movingButton = true;

let photoSection = $("#photo-Div");
let videoSection = $("#video-Div");

// DOCUMENT
photoSection.slideUp();

$(".image-btn").remove();

// Change Section --SMALL WEBPAGE BUTTON-- (Photo - Video)
let webSize = window.matchMedia("(max-width: 650px)");


if (webSize.matches) {
    $("#select-photo-Div").remove();
    $("#select-video-Div").remove();
    
    $("#body").after("<div class='section-change-btn'><h3> <span class='green'>PHOTOS</span> <span style='color: white;'>/</span> <span class='blue'>VIDEOS</span> </h3>");
}

$(".section-change-btn").click (function () {

    let sectionChangeBTN = $(".section-change-btn");
    sectionChangeBTN.addClass("btn-shadow");
    
    setTimeout(function() {
        sectionChangeBTN.removeClass("btn-shadow");
    }, 100);

    if (movingButton) {

        videoSection.slideUp();
        photoSection.slideDown();

        $(".green").addClass("text-flash");

        setTimeout(function() {
            $(".green").removeClass("text-flash");
        }, 100);
    } else {

        videoSection.slideDown();
        photoSection.slideUp();

        $(".blue").addClass("text-flash");

        setTimeout(function() {
            $(".blue").removeClass("text-flash");
        }, 100);
    }

    movingButton = !movingButton;   
});

// Change Section --ARROW-- (Photo - Video)
arrowButton.click(function() {

    if (movingButton) {
        // photo section
        videoSection.slideUp();
        photoSection.slideDown();

    } else {
        // video section
        videoSection.slideDown();
        photoSection.slideUp();
    }

    movingButton = !movingButton;
});

// Change Section --SECTION-- (Photo - Video)


// Add Media --BUTTON CLICK--
$("#add-media-Div").click (function () {

    let activeButton = $("#add-media-Div");
    let textFlash = $(".btn");
    
    activeButton.addClass("btn-shadow");
    textFlash.addClass("text-flash");

    setTimeout(function() {
        activeButton.removeClass("btn-shadow");
        textFlash.removeClass("text-flash");
    }, 200);
});


// Add MORE Photos & Videos (BOXES)
let i = 1;

$("#add-videos").click (function () {
  
    let amountOfVideoBoxes = $(".video").length;

    for (i; i <= amountOfVideoBoxes; i++) {
        $("#add-videos").before("<div class='video-content'><label for='video-upload'><img class='video V"+ i + "' src='./assets/Videos/videoPlaceholder.jpg'></label><input type='file' name='Videos' id='video-upload' class='video-input media'></div>");
    }
}); 


let x = 1;

$("#add-photos").click (function () {
  
    let amountOfImageBoxes = $(".image").length;

    for (x; x <= amountOfImageBoxes; x++) {
        $("#add-photos").before("<div class='image-content'><label for='image-upload'><img class='image I"+ x + "' src='./assets/Images/imagePlaceholder.jpg'><input type='file' name='Images' id='image-upload' class='image-input media'></div>");
    }
}); 

// Upload Photo OR Video Media
function addPhoto (image) {
    var upload = document.getElementById("image-upload");
    image.src = URL.createObjectURL(upload.files[0])
}

var imageBoxes = document.querySelectorAll(".image").length;

for (var y = 0; y <= imageBoxes; y++) {

    document.querySelectorAll(".image")[y].addEventListener("click", addPhoto(this)); 
}





// function addImage () {
//     console.log(document.querySelectorAll(".image").length)
    
//     let image = document.querySelectorAll(".image")["I" + y];
//     let uploadImage = $("#image-upload");

//     uploadImage.onchange = function () {
//         image.src = URL.createObjectURL(uploadImage.files[0])
//     }
// }

// let imageBoxAmount = document.querySelectorAll(".image").length;

// for (let y = 0; y <= imageBoxAmount; y++) {
    
//     $(".I"+ y).click (addImage ());
// }
// let z = 1;

// $(".video-btn").click (function () {
//     console.log(z)
//     if (z - 1 === 1) {    
//         let image = document.getElementByClassName("V0");
//         let uploadImage = $("#video-upload");
    
//         uploadImage.onchange = function () {
//             image.src = URL.createObjectURL(uploadImage.files[0])
//         }
       
//     } else {
//        console.log("worksvideo")

//             let image = document.getElementById("I" + z);
//             let uploadImage = $("#video-upload");

//             uploadImage.onchange = function () {
//                 image.src = URL.createObjectURL(uploadImage.files[0])
//             }
        
//     }

//     z++
// });
