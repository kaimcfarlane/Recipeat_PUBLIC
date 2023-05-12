//Instance Variables
const body = document.getElementById("body") as HTMLDivElement | null;
const recipeatTitle = document.getElementById("mainHeader") as HTMLDivElement | null;
const logoutContainer = document.getElementById("logoutContainer") as HTMLDivElement | null;
const logoutContainerClass = document.getElementsByClassName("logoutContainerClass") as HTMLCollectionOf<Element> | null;
const addStepForm = document.getElementById("addStepForm") as HTMLDivElement | null;
const addRecipeImg = document.getElementById("addRecipeImg");
const allFormContent = document.getElementById("allFormContent");
const recipeFormContainer = document.getElementById("recipeFormContainer");
const recipeFormHeader = document.getElementById("recipeFormHeader");
const mainHeader = document.getElementById("mainHeader");
const addStepBtn = document.getElementById("addStepBtn");
const addStepBtnContainer = document.getElementById("addStepBtnContainer");
const doneStepBtnContainer = document.getElementById("doneStepBtnContainer");
const doneStepBtn = document.getElementById("doneStepBtn");
var i = 0;
const recipeStep = document.getElementById("recipeStep");
const finishStepsBtn = document.getElementById("finishStepsBtn");
const addRecipeForm = document.getElementById("addRecipeForm");
var addedStep = false;
var clicked = false;

//Initalize menu for expanding logout button
recipeatTitle?.addEventListener("click",expUserSettings)

//Automatic entrance animation for add recipe button
setTimeout(()=> {
    addRecipeImg!.style.display = "block";
    addRecipeImg!.style.animation = "logoFadeIn 0.8s ease-in";
}, 1500)

//Automatic entrance animation for header
setTimeout(() => {
    mainHeader!.style.animation = "headerFadeIn 0.8s ease-in";
    mainHeader!.style.display = "flex";
}, 500)

//Expands logout menu and entrance/removal animations
function expUserSettings() {
    if(!clicked) {
        clicked = true;
        recipeatTitle!.style.backgroundColor = "#ffffff00";
        recipeatTitle!.style.boxShadow = "13px 13px 15px 11px rgba(0, 0, 0, 0.35)";
        logoutContainer!.style.display = "flex";
        logoutContainer!.classList.remove("inactiveLogout");
        logoutContainer!.classList.add("activeLogout");
        setTimeout(() => {
            logoutContainer!.style.opacity = "100%";
        },1001)
    }
    else{
        clicked = false;
        recipeatTitle!.style.backgroundColor = "white";
        recipeatTitle!.style.boxShadow = "rgb(6 255 46 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px, rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px, rgb(0 0 0 / 9%) 0px -3px 5px";
        logoutContainer!.classList.remove("activeLogout");
        logoutContainer!.classList.add("inactiveLogout");
        setTimeout(() => {
            logoutContainer!.style.opacity = "0%";
            logoutContainer!.style.display = "none";
        },1001)
    }   
}

//Removes addRecipeImage and provides new recipe entrance animation
addRecipeImg!.addEventListener("click", ()=> {
    addRecipeImg!.style.transition = "all 0.5s ease-in-out";
    addRecipeImg!.style.opacity = "0%";
    mainHeader!.style.animation = "headerButtonFade 0.8s ease-in";
    setTimeout (() => {
        mainHeader!.style.display = 'none';
        recipeFormContainer!.style.display = "flex";
        recipeFormContainer!.style.animation = "formFadeIn 0.9s ease-in";
        recipeFormHeader!.style.display = "flex";
        recipeFormHeader!.style.opacity = "100%";
        allFormContent!.style.display = "flex";
        allFormContent!.style.opacity = "100%";
    }, 799)
    setTimeout(()=> {
        addRecipeImg!.style.display = "none";
    },301)
    setTimeout(()=> {
        addStepBtnContainer!.style.display = "none";
    },489)
    addStepForm!.style.display = "flex";
    addStepForm!.style.animation = "headerFadeIn 0.8s ease-in";
})

