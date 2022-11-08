const body = document.getElementById("body");
const recipeatTitle = document.getElementById("mainHeader");
const logoutContainer = document.getElementById("logoutContainer");
const logoutContainerClass = document.getElementsByClassName("logoutContainerClass");
const addStepForm = document.getElementById("addStepForm");
recipeatTitle.addEventListener("click",expUserSettings)

var clicked = false;
function expUserSettings() {
    console.log("Top button clicked");
    if(!clicked) {
        clicked = true;
        recipeatTitle.style.backgroundColor = "#ffffff00";
        recipeatTitle.style.boxShadow = "13px 13px 15px 11px rgba(0, 0, 0, 0.35)";
        // recipeatTitle.style.display = "block";
        logoutContainer.style.display = "flex";
        logoutContainer.classList.remove("inactiveLogout");
        logoutContainer.classList.add("activeLogout");
        setTimeout(() => {
            logoutContainer.style.opacity = "100%";
        },1001)
    }
    else{
        clicked = false;
        recipeatTitle.style.backgroundColor = "white";
        recipeatTitle.style.boxShadow = "rgb(6 255 46 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px, rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px, rgb(0 0 0 / 9%) 0px -3px 5px";
        // recipeatTitle.style.display = "none";
        logoutContainer.classList.remove("activeLogout");
        logoutContainer.classList.add("inactiveLogout");
        setTimeout(() => {
            logoutContainer.style.opacity = "0%";
            logoutContainer.style.display = "none";
        },1001)
    }
    
}

const addRecipeImg = document.getElementById("addRecipeImg");

setTimeout(()=> {
    addRecipeImg.style.display = "block";
    addRecipeImg.style.animation = "logoFadeIn 0.8s ease-in";
}, 1500)

const allFormContent = document.getElementById("allFormContent");
const recipeFormContainer = document.getElementById("recipeFormContainer");
const recipeFormHeader = document.getElementById("recipeFormHeader");

addRecipeImg.addEventListener("click", ()=> {
    console.log("Add Recipe Btn Clicked!");
    addRecipeImg.style.transition = "all 0.5s ease-in-out";
    addRecipeImg.style.opacity = "0%";
    mainHeader.style.animation = "headerButtonFade 0.8s ease-in";
    setTimeout (() => {
        mainHeader.style.display = 'none';
        recipeFormContainer.style.display = "flex";
        // recipeFormContainer.style.opacity = "100%";
        recipeFormContainer.style.animation = "formFadeIn 0.9s ease-in";
        recipeFormHeader.style.display = "flex";
        recipeFormHeader.style.opacity = "100%";
        allFormContent.style.display = "flex";
        allFormContent.style.opacity = "100%";
    }, 799)
    setTimeout(()=> {
        addRecipeImg.style.display = "none";
    },301)
    //top of main header foes to 18%
    //border-bottom-left-radius: 25px;
    //border-bottom-right-radius: 25px
    setTimeout(()=> {
        addStepBtnContainer.style.display = "none";
    },489)
    //IF AJAX DOESNT WORK UNCOMMENT CODE BELOW
    addStepForm.style.display = "flex";
    addStepForm.style.animation = "headerFadeIn 0.8s ease-in";
})

const mainHeader = document.getElementById("mainHeader");
setTimeout(() => {
    mainHeader.style.animation = "headerFadeIn 0.8s ease-in";
    mainHeader.style.display = "flex";
}, 500)




//We probably will have to add an animation that does opacity for us 

//Code for adding a recipe procedure
const addStepBtn = document.getElementById("addStepBtn");

const addStepBtnContainer = document.getElementById("addStepBtnContainer");

//below is commented out as it removes step of hitting add recipe again
//TO put back uncomment below and remove addStepBtn going to display none when big green plus clicked
// addStepBtn.addEventListener("click", () => {
//     console.log("Button Clicked");

//     addRecipeImg.style.transition = "all 0.5s ease-in-out";
//     addRecipeImg.style.opacity = "0%";
//     setTimeout(()=> {
//         addStepBtnContainer.style.display = "none";
//     },489)
    
//     addStepForm.style.animation = "headerFadeIn 0.8s ease-in";
//     addStepForm.style.display = "flex";
    
// })

//Code for adding a recipe procedure step
const doneStepBtnContainer = document.getElementById("doneStepBtnContainer");
const doneStepBtn = document.getElementById("doneStepBtn");
var i = 0;
const recipeStep = document.getElementById("recipeStep");
var addedStep = false;

// function displayFinishBtn() {
//     console.log("First finish btn clicked");
//     addRecipeForm.style.display = "flex";
//     addStepBtnContainer.style.display = "none";
//     // alert("It works but refresh removes changes");
// }

//need function to create a recipe div
function addStepElement() {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = "<%= recipeSteps[i][0] %>";
    const recipeSubHeader = document.getElementById("recipeSubHeader");
    newDiv.appendChild(recipeSubHeader);
    i++;
}

// doneStepBtn.addEventListener("click", ()=> {
//     console.log("doneStepBtn Clicked!");
//         for(var a=0; a < i; a++){
//             addStepElement();
//         } 
// })

const finishStepsBtn = document.getElementById("finishStepsBtn");
console.log(finishStepsBtn);
const addRecipeForm = document.getElementById("addRecipeForm");


// doneStepBtnContainer.addEventListener("click", ()=> {
//     console.log("finish button clicked")
//     addRecipeForm.style.display = "flex";
//     addStepBtnContainer.style.display = "none";
// })

//fix display of form throuh position relative or margin top
//test whether we can see the ejs in html as normal
//then test if we can display that in html
//then test 
