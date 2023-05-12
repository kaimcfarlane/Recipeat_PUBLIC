//Instance Variables
var body = document.getElementById("body");
var recipeatTitle = document.getElementById("mainHeader");
var logoutContainer = document.getElementById("logoutContainer");
var logoutContainerClass = document.getElementsByClassName("logoutContainerClass");
var addStepForm = document.getElementById("addStepForm");
var addRecipeImg = document.getElementById("addRecipeImg");
var allFormContent = document.getElementById("allFormContent");
var recipeFormContainer = document.getElementById("recipeFormContainer");
var recipeFormHeader = document.getElementById("recipeFormHeader");
var mainHeader = document.getElementById("mainHeader");
var addStepBtn = document.getElementById("addStepBtn");
var addStepBtnContainer = document.getElementById("addStepBtnContainer");
var doneStepBtnContainer = document.getElementById("doneStepBtnContainer");
var doneStepBtn = document.getElementById("doneStepBtn");
var i = 0;
var recipeStep = document.getElementById("recipeStep");
var finishStepsBtn = document.getElementById("finishStepsBtn");
var addRecipeForm = document.getElementById("addRecipeForm");
var addedStep = false;
var clicked = false;
//Initalize menu for expanding logout button
recipeatTitle === null || recipeatTitle === void 0 ? void 0 : recipeatTitle.addEventListener("click", expUserSettings);
//Automatic entrance animation for add recipe button
setTimeout(function () {
    addRecipeImg.style.display = "block";
    addRecipeImg.style.animation = "logoFadeIn 0.8s ease-in";
}, 1500);
//Automatic entrance animation for header
setTimeout(function () {
    mainHeader.style.animation = "headerFadeIn 0.8s ease-in";
    mainHeader.style.display = "flex";
}, 500);
//Expands logout menu and entrance/removal animations
function expUserSettings() {
    if (!clicked) {
        clicked = true;
        recipeatTitle.style.backgroundColor = "#ffffff00";
        recipeatTitle.style.boxShadow = "13px 13px 15px 11px rgba(0, 0, 0, 0.35)";
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
        logoutContainer.classList.remove("activeLogout");
        logoutContainer.classList.add("inactiveLogout");
        setTimeout(function () {
            logoutContainer.style.opacity = "0%";
            logoutContainer.style.display = "none";
        }, 1001);
    }
}
//Removes addRecipeImage and provides new recipe entrance animation
addRecipeImg.addEventListener("click", function () {
    addRecipeImg.style.transition = "all 0.5s ease-in-out";
    addRecipeImg.style.opacity = "0%";
    mainHeader.style.animation = "headerButtonFade 0.8s ease-in";
    setTimeout(function () {
        mainHeader.style.display = 'none';
        recipeFormContainer.style.display = "flex";
        recipeFormContainer.style.animation = "formFadeIn 0.9s ease-in";
        recipeFormHeader.style.display = "flex";
        recipeFormHeader.style.opacity = "100%";
        allFormContent.style.display = "flex";
        allFormContent.style.opacity = "100%";
    }, 799);
    setTimeout(function () {
        addRecipeImg.style.display = "none";
    }, 301);
    setTimeout(function () {
        addStepBtnContainer.style.display = "none";
    }, 489);
    addStepForm.style.display = "flex";
    addStepForm.style.animation = "headerFadeIn 0.8s ease-in";
});
