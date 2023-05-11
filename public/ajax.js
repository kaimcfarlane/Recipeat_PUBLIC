// $(document).ready(function () {
//     $("#doneStepButton").click(function () {
//        $.post("/main")
//     });
//  });
const addRecipeForm = document.getElementById("addRecipeForm");
const addStepBtnContainer = docuement.getElementById("addStepBtnContainer");

function displayFinishButton () {
    console.log("First finish btn clicked");
    addRecipeForm.style.display = "flex";
    addStepBtnContainer.style.display = "none";
    // (A) GET FORM DATA
    var form = document.getElementById("addStepForm");
    var data = new FormData(form);
   
    // (B) AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "server.ts");
    // What to do when server responds
    xhr.onload = function () { console.log(this.response); };
    xhr.send(data);
   
    // (C) PREVENT HTML FORM SUBMIT
    return false;
  }