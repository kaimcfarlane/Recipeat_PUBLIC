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
//Makes environment variables unreachable when app is deployed
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
//Initiatlize External and Local Database/Packages
var MongoClient = require('mongodb').MongoClient;
var flash = require('express-flash');
var session = require('express-session');
var methodOverride = require('method-override');
var storage = require('node-sessionstorage');
var initializePassport = require('./passport-config');
var passport = require('passport');
var bcrypt = require('bcrypt');
var express = require('express');
var app = express();
app.use(methodOverride('_method'));
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
//Tells server directory to ejs files
app.use(express.static('/Users/kaimcfarlane/Desktop/Recipeat/public'));
//Allows HTML Form input requests to server.ts file
app.use(express.urlencoded({ extended: false }));
//Lets express know it will be talking to ejs files
app.set('view-engine', 'ejs');
//Intstance variables
var userID = "";
var recipeArray = [];
var userName = "";
var recipe = {
    recipeSteps: []
};
var recipeSteps = [];
var newUser = true;
//Initalizes Passport Package
initializePassport(passport, 
//Retrieves user's email from database
function email(UserEmail) {
    var uri1 = process.env.myUri;
    var client1 = new MongoClient(uri1);
    return getUserByEmail(client1, UserEmail);
}, 
//Retrieves user's id from database
function id(id) {
    var uri2 = process.env.myUri;
    var client2 = new MongoClient(uri2);
    return getUserById(client2, id);
});
//Adds new user to database
function addNewUser(client, user) {
    return __awaiter(this, void 0, void 0, function () {
        var theUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.db("recipeat").collection("users").insertOne(user)];
                case 1:
                    theUser = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
//gets new user from database
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
//Returns user with specific email from database
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
//Returns user's ID with specifc email from database
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
//Returns user's name with specfic email from database
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
//Returns user through user specfic ID
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
//Creates new MongoDB Collection
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
//Returns true if user already has an account
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
//Formats Recipe from MongoDB into Javascript Array
function putRecipeInArray(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var uri, client, myCursor;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    recipeArray = [];
                    uri = process.env.myUri;
                    client = new MongoClient(uri);
                    myCursor = client.db("recipeDatabase").collection(String(storage.getItem("userID"))).find();
                    return [4 /*yield*/, myCursor.forEach(function (item) {
                            if (item == null) {
                                console.log("ERROR: USER NOT FOUND IN DATABASE");
                            }
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
                    next();
                    return [2 /*return*/];
            }
        });
    });
}
//Adds user recipe to MongoDB
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
//Adds user ID to MongoDB
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
                    storage.setItem("userID", userID);
                    return [2 /*return*/];
            }
        });
    });
}
//Callback function to create colllection in MongoDB
function callbackCreateCollection(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var uri, client;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    uri = process.env.myUri;
                    client = new MongoClient(uri);
                    if (!alreadyHasCollection(client)) return [3 /*break*/, 1];
                    next();
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, client.db("recipeDatabase").createCollection(userID)];
                case 2:
                    _a.sent();
                    next();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
//Checks if this is users first recipe and if not, redirects their saved recipes
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
//Renders Login Page if user not autenticated
app.get('/', checkNotAuthenticated, function (req, res) {
    res.render('index.ejs');
});
//Checks to see if user has any recipes upon logging in and redirects to proper page
app.post('/', addUserID, checkNotAuthenticated, callbackCreateCollection, passport.authenticate('local', {
    successRedirect: '/firstRecipe',
    failureRedirect: '/',
    failureFlash: true
}));
//Adds Recipe to Database
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
});
//Renders Main Page
app.get('/main', checkAuthenticated, function (req, res) {
    res.render('main.ejs', { recipeSteps: recipeSteps });
});
//Renders Recipe Page
app.get('/recipes', checkAuthenticated, putRecipeInArray, function (req, res) {
    res.render('recipes.ejs', { data: { userName: userName, recipeArray: recipeArray } });
});
//Renders FirstRecipe Page
app.get('/firstRecipe', isFirstRecipe, checkAuthenticated, function (req, res) {
    res.render('firstRecipe.ejs', { userName: userName });
});
//Form on recipe page that redirects user to Main Page
app.post('/toMain', function (req, res) {
    res.redirect('/main');
});
//Renders Register Page
app.get('/register', checkNotAuthenticated, function (req, res) {
    res.render('register.ejs');
});
//Saves user's name and password, encryps it, and stores it in database
app.post('/register', checkNotAuthenticated, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
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
                        userID = String(user._id);
                        sessionStorage.setItem("userID", userID);
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
                return [4 /*yield*/, bcrypt.hash(req.body.password, 10)];
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
//Deletes User Recipe from Database
app["delete"]('/logout', function (req, res, next) {
    req.logOut(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});
//Checks if user is authenticated
function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    else {
        res.redirect('/');
    }
}
//Checks if user is not authenrticated
function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/recipes');
    }
    next();
}
//Checks if user is new (doesn't have a recipe yet)
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
