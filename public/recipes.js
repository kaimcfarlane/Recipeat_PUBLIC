//Instance variables
var body = document.getElementById("body");
var recipeatTitle = document.getElementById("mainHeader");
var logoutContainer = document.getElementById("logoutContainer");
var logoutContainerClass = document.getElementsByClassName("logoutContainerClass");
var allFormContent = document.getElementById("allFormContent");
var recipeFormContainer = document.getElementById("recipeFormContainer");
var recipeFormHeader = document.getElementById("recipeFormHeader");
var mainHeader = document.getElementById("mainHeader");
var temp = document.getElementsByTagName("template")[0];
var allRecipeContent = document.getElementById("allRecipeContent");
recipeatTitle.addEventListener("click", expUserSettings);
var clicked = false;
//Expands logout menu and entrance/removal animations
function expUserSettings() {
    if (!clicked) {
        clicked = true;
        recipeatTitle.style.backgroundColor = "#ffffff00";
        recipeatTitle.style.boxShadow = "13px 13px 15px 11px rgba(0, 0, 0, 0.35)";
        // recipeatTitle.style.display = "block";
        logoutContainer.style.display = "flex";
        logoutContainer.classList.remove("inactiveLogout");
        logoutContainer.classList.add("activeLogout");
        setTimeout(function () {
            logoutContainer.style.opacity = "100%";
        }, 1001);
    }
    else {
        clicked = false;
        recipeatTitle.style.backgroundColor = "white";
        recipeatTitle.style.boxShadow = "rgb(6 255 46 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px, rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px, rgb(0 0 0 / 9%) 0px -3px 5px";
        // recipeatTitle.style.display = "none";
        logoutContainer.classList.remove("activeLogout");
        logoutContainer.classList.add("inactiveLogout");
        setTimeout(function () {
            logoutContainer.style.opacity = "0%";
            logoutContainer.style.display = "none";
        }, 1001);
    }
}
//Automatic entrance animation for header
setTimeout(function () {
    mainHeader.style.animation = "headerFadeIn 0.8s ease-in";
    mainHeader.style.display = "flex";
}, 500);
