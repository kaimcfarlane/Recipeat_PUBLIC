// console.log("server typescirpt working")
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// const express = require("express")
// const app = express()
//We should be ablte to just do node server.js
// app.listen(3000)
// const express = require("express");
// const app = express();
// const bcrypt = require("bcrypt");
// app.use(express.urlenconded({extended: false}))
//Essentially our 'login' is just the name of this route AKA 
//the name of the url we are targeting
//Its weird as it seems that we can only pull data from .ejs files and not .html
//To use ejs we have install it via node package and use express to render it.
//We then take the name attribute from the form and access them as so below
//We use env for environment variables or server side variables
//We save these sensitive things in a .env file as well as packages in a .gitinoire so it isn;t posted to github
//Now below is it a bit advanced but hear me out
//We put "nodemon server.js" in our package.json within scripts
//because we want a scirpt we can run from the terminal
//that will run multiple things, specifically nodemon and server.js
//remember that nodemon just restarts our express server everytime it changes
//Also create another terminal for tsc and other commands after
// app.get('/', (req,res)=>{
//     var username = req.body.username
//     var password = req.body.password
//     var email = req.body.email
//     console.log(username + password + email);
// })
//Just says if we are not in devlopment set our environment vairbales to 
//our varibles in this file
// (window.navigator as any).d
// window.navigator['d']
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
//this just links our code to a sepeerate js file we made for passport module methods
var initializePassport = require('./passport-config');
var passport = require('passport');
//This takes in our passport and the function that is exported in the passport file
//29.00
initializePassport(passport, 
//here we want to return the email from the database
function email(UserEmail) {
    var uri1 = process.env.myUri;
    var client1 = new MongoClient(uri1);
    return getUserByEmail(client1, UserEmail);
}, 
//here we want to take that user and get its id
function id(id) {
    var uri2 = process.env.myUri;
    var client2 = new MongoClient(uri2);
    return getUserById(client2, id);
});
var MongoClient = require('mongodb').MongoClient;
var flash = require('express-flash');
var session = require('express-session');
var methodOverride = require('method-override');
var storage = require('node-sessionstorage');
function addNewUser(client, user) {
    return __awaiter(this, void 0, void 0, function () {
        var theUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.db("recipeat").collection("users").insertOne(user)];
                case 1:
                    theUser = _a.sent();
                    console.log("New User Added");
                    console.log(theUser);
                    return [2 /*return*/];
            }
        });
    });
}
function getUserByName(client, name) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.db("recipeat").collection("users").findOne({ username: name })];
                case 1:
                    result = _a.sent();
                    try {
                        if (result) {
                            return [2 /*return*/, result];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                    }
                    catch (err) {
                        console.log(err);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function getUserByEmail(client, email) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.db("recipeat").collection("users").findOne({ email: email })];
                case 1:
                    result = _a.sent();
                    try {
                        if (result) {
                            console.log(result.password);
                            return [2 /*return*/, result];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                    }
                    catch (err) {
                        console.log(err);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function getUserIDByEmail(client, email) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.db("recipeat").collection("users").findOne({ email: email })];
                case 1:
                    result = _a.sent();
                    try {
                        if (result) {
                            console.log(result.password);
                            return [2 /*return*/, result._id];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                    }
                    catch (err) {
                        console.log(err);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function getUsernameByEmail(client, email) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.db("recipeat").collection("users").findOne({ email: email })];
                case 1:
                    result = _a.sent();
                    try {
                        if (result) {
                            console.log(result.password);
                            return [2 /*return*/, result.username];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                    }
                    catch (err) {
                        console.log(err);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function getUserById(client, id) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.db("recipeat").collection("users").findOne({ id: id })];
                case 1:
                    result = _a.sent();
                    try {
                        if (result) {
                            return [2 /*return*/, result];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                    }
                    catch (err) {
                        console.log(err);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
var userID = "";
function createCollection(client) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.db("recipeDatabase").createCollection(userID)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function alreadyHasCollection(client) {
    return __awaiter(this, void 0, void 0, function () {
        var result, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.db("recipeDatabase").listCollections().toArray()];
                case 1:
                    result = _a.sent();
                    for (i = 0; i < result.length; i++) {
                        if (result == userID) {
                            return [2 /*return*/, true];
                        }
                    }
                    return [2 /*return*/, false];
            }
        });
    });
}
var recipeArray = [];
function putRecipeInArray(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var uri, client, myCursor;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // const result = await client.db("recipeDatabase").findOne(userID);
                    recipeArray = [];
                    uri = process.env.myUri;
                    client = new MongoClient(uri);
                    myCursor = client.db("recipeDatabase").collection(String(storage.getItem("userID"))).find();
                    return [4 /*yield*/, myCursor.forEach(function (item) {
                            // If the item is null then the cursor is exhausted/empty and closed
                            if (item == null) {
                                console.log("There is no document here");
                            }
                            // recipeArray[i].push(result.recipeSteps[i].cookMethod);
                            // console.log("One item is " + item.recipeSteps[0].cookMethod);
                            //note recipe steps here targets mongodb not the local variable
                            //local variable only has one recipe with multiple stpes.
                            //for when we have multiple steps we will have to iterate through each recipe step not just at 0.
                            var recipeArrayNew = [];
                            recipeArrayNew.push(item.recipeSteps[0].recipeMinTime);
                            recipeArrayNew.push(item.recipeSteps[0].recipeHourTime);
                            recipeArrayNew.push(item.recipeSteps[0].recipeProcedure);
                            recipeArrayNew.push(item.recipeSteps[0].recipeIngredients);
                            recipeArrayNew.push(item.recipeSteps[0].recipeName);
                            recipeArray.push(recipeArrayNew);
                        })];
                case 1:
                    _a.sent();
                    console.log("user recipe array upon login looks like " + recipeArray);
                    console.log("recipeArray in depth looks like " + recipeArray[0][4]);
                    next();
                    return [2 /*return*/];
            }
        });
    });
}
//when logging in it doesnt go to next page (check redirect when gone to first recipe within method and check why this method 
// above is even running becuase it is not called until later not when login post is called)
function addRecipeToCollection(client, myRecipe) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.db("recipeDatabase").collection(userID).insertOne(myRecipe)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function addUserID(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var email, uri, client, userID;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, checkNewUser(req, res, next)];
                case 1:
                    _a.sent();
                    email = req.body.email;
                    uri = process.env.myUri;
                    client = new MongoClient(uri);
                    return [4 /*yield*/, getUserIDByEmail(client, email)];
                case 2:
                    userID = _a.sent();
                    return [4 /*yield*/, getUsernameByEmail(client, email)];
                case 3:
                    userName = _a.sent();
                    console.log(userName + " has logged in");
                    storage.setItem("userID", userID);
                    console.log("User just logged in: " + userID);
                    return [2 /*return*/];
            }
        });
    });
}
function callbackCreateCollection(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var uri, client;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Calling callbackcreatecollection function");
                    uri = process.env.myUri;
                    client = new MongoClient(uri);
                    if (!alreadyHasCollection(client)) return [3 /*break*/, 1];
                    console.log("User already has collection when loggin in");
                    next();
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, client.db("recipeDatabase").createCollection(userID)];
                case 2:
                    _a.sent();
                    console.log("created collection at callback");
                    next();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
//checks if this is users first recipe by checing if user has recipe added
//if not user will be redirected to all recipes page
function isFirstRecipe(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var uri, client, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    uri = process.env.myUri;
                    client = new MongoClient(uri);
                    return [4 /*yield*/, client.db("recipeDatabase").collection(String(storage.getItem("userID"))).findOne()];
                case 1:
                    result = _a.sent();
                    try {
                        if (result) {
                            res.redirect('/recipes');
                        }
                        else {
                            next();
                        }
                    }
                    catch (err) {
                        console.log(err);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
//other user is bca b@a
//issue with logout, can't relogin unless I restart server
// app.listen(5500);
// var user = {};
var bcrypt = require('bcrypt');
var express = require('express');
var app = express();
//Below is for our styling
//Remeber that we are making our page from rendering our .ejs
//Below tells our server that ejs files can acess the files in our public folder
app.use(express.static('/Users/kaimcfarlane/Desktop/Recipeat/public'));
//Below allows us to get the info from our form and access via req variable
//Now we can go req.body.(whatever is set for name tag)
app.use(express.urlencoded({ extended: false }));
//Here we say when we put _method next to our action in our html form instead of post it will delete
app.use(methodOverride('_method'));
app.use(flash());
app.use(session({
    //This is the key that encrypts our info that goes to passport
    //This is saved in .env file so only we know what it is 
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
//setting up express with our session and initializing it
app.use(passport.initialize());
app.use(passport.session());
//Here we are letting express know it will be talking to ejs files
app.set('view-engine', 'ejs');
//Here we are saying at port 3000, on the home page, get and render this .ejs file
app.get('/', checkNotAuthenticated, function (req, res) {
    res.render('index.ejs');
});
//Here we are sayign go to main url and do this
// app.post('/', (req,res) => {
// })
//supposedly intstead of even posting the login info to our server
//we can authenticate by directly passing the infromation into passport
var userName = "";
app.post('/', addUserID, checkNotAuthenticated, callbackCreateCollection, passport.authenticate('local', {
    //what to do if authentication is successful
    successRedirect: '/firstRecipe',
    failureRedirect: '/',
    //This uses falsh for our error messages
    failureFlash: true
    //try to implement below function here so it passes before above  (may need to use passport)
})
// , async (req,res, next) => {
//     await checkNewUser(req,res,next);
//     var email = req.body.email;
//     const client = new MongoClient(uri);
//     var user = await getUserIDByEmail(client, email);
//     userID = user._id;
//     console.log("User ID from login is recorded as " + userID);
// }
);
//checkAuthenticated is a function we made, not passport
//it however call a passport method inside to check if the authetnicated method is run
//you can always put a method in these get/post request that run before the req/res
var recipe = {
    recipeSteps: []
};
var recipeSteps = [];
//Used for requests/responses as AJAX
// var xhttp = new XMLHttpRequest();
//abort stops reuest
//send() is a get request
//send(String) is a post request 
app.post('/main', function (req, res) {
    var stepOne = {
        recipeMinTime: 0,
        recipeHourTime: 0,
        recipeProcedure: "",
        recipeIngredients: "",
        recipeName: ""
    };
    try {
        stepOne['recipeMinTime'] = req.body.recipeMinTime;
        stepOne['recipeHourTime'] = req.body.recipeHourTime;
        stepOne['recipeProcedure'] = req.body.recipeProcedure;
        stepOne['recipeIngredients'] = req.body.ingredients;
        stepOne['recipeName'] = req.body.recipeName;
        //recipeImage needs be saved elsewhere
        // stepOne['recipeImage'] = req.body.recipeImage;
        recipeSteps.push(stepOne);
        recipe['recipeSteps'] = recipeSteps;
        var uri = process.env.myUri;
        var client = new MongoClient(uri);
        if (alreadyHasCollection(client)) {
            userID = String(storage.getItem("userID"));
            addRecipeToCollection(client, recipe);
            setTimeout(function () {
                res.redirect('/recipes');
            }, 1000);
        }
        else {
            //do stuff below
            userID = String(storage.getItem("userID"));
            createCollection(client);
            addRecipeToCollection(client, recipe);
            res.redirect('/recipes');
        }
        res.redirect('/recipes');
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log("Step Added!");
        console.log(recipeSteps);
    }
});
app.get('/main', checkAuthenticated, function (req, res) {
    console.log(recipeSteps + " we are here");
    console.log("UserID after logging in is " + userID);
    res.render('main.ejs', { recipeSteps: recipeSteps });
});
// app.post('/finalizeRecipe', (req,res) => {
//     try{
//         console.log("Finilaize button redirecting to here");
//         recipe['recipeSteps'] = recipeSteps;
//         const client = new MongoClient(uri);
//         if(alreadyHasCollection(client)) {
//             userID = String(storage.getItem("userID"));
//             addRecipeToCollection(client, recipe);
//             res.redirect('/recipes');
//         }
//         else {
//             //do stuff below
//             userID = String(storage.getItem("userID"));
//             createCollection(client);
//             addRecipeToCollection(client, recipe);
//             res.redirect('/recipes');
//         }
//     }
//     catch(e){
//         console.log(e);
//     }
// })
//action just lets us tell our get/post to go to spevific form no matter the file
// app.get('/recipes', checkAuthenticated, putRecipeInArray, (req, res, next) => {
//         recipeArray = [[]];
//         next();
//     }, (req,res) => {
//         console.log("About to render recipe page");
//     res.render('recipes.ejs', {userName: userName}, {recipeArray: recipeArray});    
// })
app.get('/recipes', checkAuthenticated, putRecipeInArray, function (req, res) {
    console.log("About to render recipe page");
    res.render('recipes.ejs', { data: { userName: userName, recipeArray: recipeArray } });
    // res.render({recipeArray: recipeArray});   
});
//IF PAGE DOESN"T LOAD THE RES.RENDER is wronf (after second render must change)
// app.get('/recipes', checkAuthenticated, (req,res) => {
//     res.render('recipes.ejs', {userName: userName});
// })
app.get('/firstRecipe', isFirstRecipe, checkAuthenticated, function (req, res) {
    res.render('firstRecipe.ejs', { userName: userName });
});
//Form on recipe page that redirects user to main or (Add Recipe Page)
app.post('/toMain', function (req, res) {
    console.log("Redirecting User from Recipe Page to Add Recipe Page");
    res.redirect('/main');
});
// const recipeSteps = [
//     []
// ];
// app.post('/main', (req,res) => {
//     var stepOne = [];
//     try{
//         stepOne.push(req.body.cookMethod);
//         stepOne.push(req.body.recipeMinTime);
//         stepOne.push(req.body.recipeHourTime);
//         stepOne.push(req.body.recipeProcedure);
//         stepOne.push(req.body.ingredients)
//         recipeSteps.push(stepOne);
//         res.redirect('/main');
//     }
//     catch (err) {
//         console.log(err);
//     }
//     finally {
//         console.log("Step Added!");
//         console.log(recipeSteps);
//     }
// })
// {name: req.user.username},
// var i = 0;
// var b = 0;
// var loadedOnce = false;
// app.get('/main', checkAuthenticated, (req,res) => {
//     console.log(recipeSteps[i][0] + " we are here");
//     if(loadedOnce){
//         res.render('main.ejs', {recipeSteps: recipeSteps[i][0] + " for " + recipeSteps[i][1] + " minutes and " + recipeSteps[i][2] + " hours"});
//     }
//     else{
//         res.render('main.ejs', {recipeSteps: recipeSteps[0][0]});
//         loadedOnce = true;
//     }
//     i++;  
// })
//try to change the recipe steps to objects that hold each of the data
//so we can pick and choose whats printed in the ejs for main.html not here
//already in video bheind this
app.get('/register', checkNotAuthenticated, function (req, res) {
    res.render('register.ejs');
});
app.post('/register', checkNotAuthenticated, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    // user = {
    //     username: req.body.username,
    //     email: req.body.email,
    //     password: hashedPassword
    // }
    function main() {
        return __awaiter(this, void 0, void 0, function () {
            var uri, client, user, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = process.env.myUri;
                        client = new MongoClient(uri);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, 6, 8]);
                        return [4 /*yield*/, client.connect()];
                    case 2:
                        _a.sent();
                        console.log("connection made");
                        return [4 /*yield*/, addNewUser(client, {
                                username: req.body.username,
                                email: req.body.email,
                                password: hashedPassword
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, getUserByName(client, req.body.username)];
                    case 4:
                        user = _a.sent();
                        console.log("User is " + user);
                        userID = String(user._id);
                        sessionStorage.setItem("userID", userID);
                        console.log("User ID is " + userID);
                        newUser = true;
                        return [3 /*break*/, 8];
                    case 5:
                        err_2 = _a.sent();
                        console.error(err_2);
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, client.close()];
                    case 7:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    }
    var hashedPassword, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, bcrypt.hash(req.body.password, 10)
                    // user = {
                    //     username: req.body.username,
                    //     email: req.body.email,
                    //     password: hashedPassword
                    // }
                ];
            case 1:
                hashedPassword = _a.sent();
                main()["catch"](console.error);
                res.redirect('/');
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                return [2 /*return*/, res.redirect('/register')];
            case 3: return [2 /*return*/];
        }
    });
}); });
//logout is set up by passport alreay
//to call this logout via the form in html we need another npm module
//npm i method-override
app["delete"]('/logout', function (req, res, next) {
    req.logOut(function (err) {
        if (err) {
            return next(err);
        }
        console.log("User Logged out");
        res.redirect('/');
    });
});
function checkAuthenticated(req, res, next) {
    //calls a passport built in function to see if we successfully ran the authenticated srcipt
    //this is to prevent pppl from going ot /main without authentification
    if (req.isAuthenticated()) {
        return next();
    }
    else {
        res.redirect('/');
    }
}
//checks if user is already authenticated
//basically is alreayd logged in you don't have to re-login every time
//for development we can just restart our server to access each page
function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/recipes');
    }
    next();
}
//checks if user is loggin in for first time
//if true user will be redirected to create recipe page through next()
//if false user will be redirected to the main recipes page
//function should be implemented in login route
var newUser = true;
function checkNewUser(req, res, next) {
    if (!newUser) {
        return res.redirect('/recipes');
    }
    else {
        newUser = false;
        next();
    }
}
app.listen(3000);
//We reahc line where we log user but other logging above that code doesnt work
//Determine whetehr we put logic saying we have recipes go to recipe page or if not go to add recipe page
//Or we always go to recipes page and add button to add recipes
//Right now we have this situation
//On submit of form it refreshes and doesn't pass function
//If we put return default, the form will not submit and just pass an emtpy obejct that must be deleted in mongodb for code to run
//RIght now we are trying to call the script and do the server code in ajax.js then return default but the ajax script will not run
//Still havent tried putting return false in the .ejs file instead of ajax
//Still havent tried wathcing the video on th website nor the fethc request method
