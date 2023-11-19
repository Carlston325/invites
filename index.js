// BUTTON 0: Title
function getTitleValue (){
    
    let titleInput = document.getElementById("title-input").value
        
    let title = document.getElementById("title");
    title.innerText = titleInput;

    $("#submit-title").hide();
}

// BUTTON 1: Date
function getDateValue (){
    
    let dayInput = document.getElementById("day-select").value;
    let monthInput = document.getElementById("month-select").value;
    let yearInput = document.getElementById("year-input").value;
        
    let day = document.getElementById("day");
    let month = document.getElementById("month");
    let year = document.getElementById("year");

    day.innerText = dayInput;
    month.innerText = monthInput;
    year.innerText = yearInput;

    $("#submit-date").hide();
}

// BUTTON 2: Message
function getMessageValue (){

    let messageInput = document.getElementById("message-input").value;
    let mentionInput1 = document.getElementById("mention-input-1").value;
    let mentionInput2 = document.getElementById("mention-input-2").value;
    let mentionInput3 = document.getElementById("mention-input-3").value;


    let message = document.getElementById("message-title");
    let mention_1 = document.querySelector("#mention-1");
    let mention_2 = document.querySelector("#mention-2");
    let mention_3 = document.querySelector("#mention-3");

    message.innerText = messageInput;
    mention_1.innerText = mentionInput1;
    mention_2.innerText = mentionInput2;
    mention_3.innerText = mentionInput3;

    $("#submit-message").hide();
}

// BUTTON 3: Choose Page Background
let selectBackground = document.querySelector("#saved-bg-upload");
let backgroundImage = document.querySelector(".background-img");

function changeBackground() {
    backgroundImage.setAttribute("src", "./assets/card_background/" + selectBackground.value + ".jpg");
}

// BUTTON: Upload Own Background
let imageUpload = document.querySelector("#background-img");
let bgUpload = document.querySelector("#bg-upload");

bgUpload.onchange = function () {
    console.log(imageUpload.src = URL.createObjectURL(bgUpload.files[0]))
    imageUpload.src = URL.createObjectURL(bgUpload.files[0])
}

// BUTTON 4: Location
let locationInput = document.querySelector("#location-url");
let getLocation = document.querySelector("#location a");

function changeLocation() {
    getLocation.setAttribute("href", locationInput.value);

    $("#submit-location").hide();
}

// BUTTON 5: Card
$("#submit-card").click (function () {
    $(".input-containers").remove();
    $("#background-upload-container").remove();
    $("#submit-card").remove();

})


// TRIGGER EVENT on BUTTON CLICK
let numberOfButtons = document.querySelectorAll("button").length;

for (let i = 0; i <= numberOfButtons; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function(e) {
        e.preventDefault();

        if (i === 0) {
            getTitleValue();

        } else if (i === 1) {
            getDateValue();

        } else if (i === 2) {
            getMessageValue();
            
        } else if (i === 3) {
            selectBackground.addEventListener("change", changeBackground());

        } else if (i === 4) {
            changeLocation();
        }
    });
}
