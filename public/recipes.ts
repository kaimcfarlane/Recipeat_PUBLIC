var body = document.getElementById("body");
var recipeatTitle = document.getElementById("mainHeader");
var logoutContainer = document.getElementById("logoutContainer");
var logoutContainerClass = document.getElementsByClassName("logoutContainerClass");
recipeatTitle.addEventListener("click", expUserSettings);
var clicked = false;

//fix logout not showing after muktiple clicks
function expUserSettings() {
    console.log("Top button clicked");
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
// var addRecipeImg = document.getElementById("addRecipeImg");
// setTimeout(function () {
//     addRecipeImg.style.display = "block";
//     addRecipeImg.style.animation = "logoFadeIn 0.8s ease-in";
// }, 1500);
var allFormContent = document.getElementById("allFormContent");
var recipeFormContainer = document.getElementById("recipeFormContainer");
var recipeFormHeader = document.getElementById("recipeFormHeader");
var mainHeader = document.getElementById("mainHeader");
setTimeout(function () {
    mainHeader.style.animation = "headerFadeIn 0.8s ease-in";
    mainHeader.style.display = "flex";
}, 500);
//We probably will have to add an animation that does opacity for us 
//check if user has recipe, if so display it via

//On addFirstRecipe Page add code to previous callback function to check if user has a recipe()
//Try to say in that get request to redirect to all Recipes page


//notice there will be ANOTHER TEMPLATE for the expandable recipe
var temp = document.getElementsByTagName("template")[0];
var allRecipeContent = document.getElementById("allRecipeContent");

//displays general recipe name and image



function fillRecipeTemplate() {
    var itemText = temp.content.querySelector("p");
    // var itemImg = temp.content.querySelector("recipeImg");
    var textNode = document.importNode(itemText, true);
    // var imgNode = document.importNode(itemImg, true);
    
    //BELOW for I lenght must be recipeArray length


    // for(var i=0; i<1; i++) {
    //     console.log("Template text being covertered to html");
    //     textNode.innerHTML = "<%= data.recipeArray[i][4] %>";
    //     allRecipeContent.appendChild(textNode);
    // }


    //images arent saved yet (have to nchekc if allowed on mongodb)
    // imgNode.innerHTML += "<%= recipeArray[i][%>";
    // allRecipeContent.appendChild(imgNode);
}

// setTimeout(fillRecipeTemplate, 1);

// <% var itemText = temp.content.querySelector("p")%>
//         <% var textNode = document.importNode(itemText, true)%>
//         <% data.recipeArray.forEach(recipe => {%>
//            <% console.log("Template text being covertered to html") %>
//            <% textNode.innerHTML = "%>
//            <%= recipe[4] %>
//            <%"%>
//            <%allRecipeContent.appendChild(textNode)%>
//         <}%> 