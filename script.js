/* 
Gavin Doel
CS 2550

This JS file will show the info that is connected to
the Each button as well as show the contact information 
when the anchor is clicked and toggling between dark and light mode*/

                    /* North Info */
var timesClickedNorth = 0;
function northClick() {
    timesClickedNorth += 1;
    var clicked = document.getElementById("northInfo");
    var clickedRobb = document.getElementById("robbInfo");
    var clickedEsc =                         document.getElementById("escInfo");
    if (timesClickedNorth%2 == 1 && timesClickedRobb == 0 && timesClickedEsc == 0) {
        clicked.style.display = "block";
        clicked.style.marginBottom = "230px";
    }
    else if (timesClickedNorth == timesClickedRobb){
        clickedRobb.style.display = "none";
        clicked.style.display = "block";
        clicked.style.marginBottom = "230px";
    }
    else if (timesClickedNorth == timesClickedEsc){
        clickedEsc.style.display = "none";
        clicked.style.display = "block";
        clicked.style.marginBottom = "230px";
    }
    else {
        clicked.style.display = "none";
        timesClickedNorth = 0;
    }
};
                    /* Robbers Roost Info */
var timesClickedRobb = 0;
function robbClick() {
    var clicked = document.getElementById("northInfo");
    var clickedRobb = document.getElementById("robbInfo");
    var clickedEsc =                         document.getElementById("escInfo");
    timesClickedRobb += 1;
    if (timesClickedRobb%2 == 1 && timesClickedNorth == 0 && timesClickedEsc == 0) {
        clickedRobb.style.display = "block";
    }
    else if (timesClickedNorth == timesClickedRobb){
      clicked.style.display = "none";
      clickedRobb.style.display = "block";
    }
    else if (timesClickedEsc == timesClickedRobb){
      clickedEsc.style.display = "none";
      clickedRobb.style.display = "block";
    }
    else {
        clickedRobb.style.display = "none";
        timesClickedRobb = 0;
    }
};
                    /* Escalante Info */
var timesClickedEsc = 0;
function escClick() {
    var clicked = document.getElementById("northInfo");
    var clickedRobb = document.getElementById("robbInfo");
    var clickedEsc =                         document.getElementById("escInfo");
    timesClickedEsc += 1;
    if (timesClickedEsc%2 == 1 && timesClickedRobb == 0 && timesClickedNorth == 0) {
        clickedEsc.style.display = "block";
        clickedEsc.style.marginBottom = "230px";
    }
    else if (timesClickedEsc == timesClickedRobb){
        clickedRobb.style.display = "none";
        clickedEsc.style.display = "block";
        clickedEsc.style.marginBottom = "230px";
    
        timesClickedEsc = 0;
    }
    else if (timesClickedEsc == timesClickedNorth){
        clickedNorth.style.display = "none";
        clickedEsc.style.display = "block";
        clickedEsc.style.marginBottom = "230px";
        timesClickedEsc = 0;
    }
    else {
        clickedEsc.style.display = "none";
        timesClickedEsc = 0;
    }
    
}
                    /* Contact Form */
function contactClick() {
    var clickedContact = document.getElementById("contact");
    clickedContact.style.display = "block";
}
                    /* Theme toggle */
var darkModeOn = 1;
function addCss() {
    if (darkModeOn % 2 == 1) {
        darkModeOn += 1; 
        var head = document.head;
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = 'theme.css';
        head.appendChild(link);
        var button = document.getElementById("toggleButton");
        button.textContent = "Light Mode";
    }
    else {
        darkModeOn -= 1;
        var head = document.head;
        head.removeChild(head.lastChild);
        var button = document.getElementById("toggleButton");
        button.textContent = "Dark Mode";
    }
}
                    /* Visitor Form */

function visitorForm() {
    let log = document.getElementById("visitorForm");
    log.style.display = "block";
}
