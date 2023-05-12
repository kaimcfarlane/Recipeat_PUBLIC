//Makes environment variables unreachable when app is deployed
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

//Initiatlize External and Local Database/Packages
const { MongoClient } = require('mongodb');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const storage = require('node-sessionstorage');
const initializePassport = require('./passport-config');
const passport = require('passport')
const bcrypt = require('bcrypt')
const express = require('express')
const app = express()
app.use(methodOverride('_method'))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

//Tells server directory to ejs files
app.use(express.static('/Users/kaimcfarlane/Desktop/Recipeat/public'))

//Allows HTML Form input requests to server.ts file
app.use(express.urlencoded({extended: false}))

//Lets express know it will be talking to ejs files
app.set('view-engine', 'ejs');

//Intstance variables
var userID = "";
var recipeArray = [];
var userName = "";
const recipe = {
    recipeSteps: []
}
const recipeSteps = [];
var newUser = true;

//Initalizes Passport Package
initializePassport(passport,
    //Retrieves user's email from database
    function email(UserEmail) {
        const uri1 = process.env.myUri;
        const client1 = new MongoClient(uri1);
        return getUserByEmail(client1, UserEmail)
    },
    //Retrieves user's id from database
    function id(id) {
        const uri2 = process.env.myUri;
        const client2 = new MongoClient(uri2);
        return getUserById(client2, id);
    }
)

//Adds new user to database
async function addNewUser(client, user){
    const theUser = await client.db("recipeat").collection("users").insertOne(user)
}

//gets new user from database
async function getUserByName(client, name){
    const result = await client.db("recipeat").collection("users").findOne({username: name})
    try{
        if(result) {
            return result
        }
        else {
            return null
        }
    }
    catch(err){
        console.log(err);
    }
}

//Returns user with specific email from database
async function getUserByEmail(client, email){
    const result = await client.db("recipeat").collection("users").findOne({email: email})
    try{
        if(result) {
            return result;
        }
        else {
            return null
        }
    }
    catch(err){
        console.log(err);
    }
}

//Returns user's ID with specifc email from database
async function getUserIDByEmail(client, email){
    const result = await client.db("recipeat").collection("users").findOne({email: email})
    try{
        if(result) {
            return result._id;
        }
        else {
            return null
        }
    }
    catch(err){
        console.log(err);
    }
}

//Returns user's name with specfic email from database
async function getUsernameByEmail(client, email) {
    const result = await client.db("recipeat").collection("users").findOne({email: email})
    try{
        if(result) {
            return result.username;
        }
        else {
            return null
        }
    }
    catch(err){
        console.log(err);
    }
}

//Returns user through user specfic ID
async function getUserById(client, id) {
    const result = await client.db("recipeat").collection("users").findOne({id: id})
    try{
        if(result) {
            return result
        }
        else {
            return null
        }
    }
    catch(err){
        console.log(err);
    }
}

//Creates new MongoDB Collection
async function createCollection(client) {
    const result = await client.db("recipeDatabase").createCollection(userID);
}

//Returns true if user already has an account
async function alreadyHasCollection(client) {
    const result = await client.db("recipeDatabase").listCollections().toArray();
    for(var i=0;i<result.length;i++){
        if(result == userID){
            return true;
        }
    }
    return false;
}

//Formats Recipe from MongoDB into Javascript Array
async function putRecipeInArray (req,res,next) {
    recipeArray = [];
    const uri = process.env.myUri;
    const client = new MongoClient(uri);
        var myCursor = client.db("recipeDatabase").collection(String(storage.getItem("userID"))).find();
        await myCursor.forEach(item => {
            if(item == null) {
                console.log("ERROR: USER NOT FOUND IN DATABASE")
            }
            var recipeArrayNew = [];
            recipeArrayNew.push(item.recipeSteps[0].recipeMinTime);
            recipeArrayNew.push(item.recipeSteps[0].recipeHourTime);
            recipeArrayNew.push(item.recipeSteps[0].recipeProcedure);
            recipeArrayNew.push(item.recipeSteps[0].recipeIngredients);
            recipeArrayNew.push(item.recipeSteps[0].recipeName);
            recipeArray.push(recipeArrayNew);
        }) 
    next();
}    

//Adds user recipe to MongoDB
async function addRecipeToCollection(client, myRecipe) {
    const result = await client.db("recipeDatabase").collection(userID).insertOne(myRecipe);
}

//Adds user ID to MongoDB
async function addUserID (req,res, next) {
    await checkNewUser(req,res,next);
    var email = req.body.email;
    const uri = process.env.myUri;
    const client = new MongoClient(uri);
    var userID = await getUserIDByEmail(client, email);
    userName = await getUsernameByEmail(client,email);
    storage.setItem("userID", userID);
}

//Callback function to create colllection in MongoDB
async function callbackCreateCollection(req,res,next) {
    const uri = process.env.myUri;
    const client = new MongoClient(uri);
    if(alreadyHasCollection(client))
    {
        next();
    }
    else 
    {
        await client.db("recipeDatabase").createCollection(userID);
        next();
    } 
}

//Checks if this is users first recipe and if not, redirects their saved recipes
async function isFirstRecipe(req,res,next) {
        const uri = process.env.myUri;
        const client = new MongoClient(uri);
        const result = await client.db("recipeDatabase").collection(String(storage.getItem("userID"))).findOne();
        try{
            if(result) {
                res.redirect('/recipes')
            }
            else {
                next();
            }
        }
        catch(err){
            console.log(err);
        }
    }

//Renders Login Page if user not autenticated
app.get('/', checkNotAuthenticated, (req,res)=>{
    res.render('index.ejs')
})

//Checks to see if user has any recipes upon logging in and redirects to proper page
app.post('/', addUserID, checkNotAuthenticated, callbackCreateCollection, passport.authenticate('local',{
    successRedirect: '/firstRecipe',
    failureRedirect: '/',
    failureFlash: true
    })
) 

//Adds Recipe to Database
app.post('/main', (req,res) => {
    var stepOne = {
    recipeMinTime: 0,
    recipeHourTime: 0,
    recipeProcedure: "",
    recipeIngredients: "",
    recipeName: "",
};
    try{
        stepOne['recipeMinTime'] = req.body.recipeMinTime;
        stepOne['recipeHourTime'] = req.body.recipeHourTime;
        stepOne['recipeProcedure'] = req.body.recipeProcedure;
        stepOne['recipeIngredients'] = req.body.ingredients;
        stepOne['recipeName'] = req.body.recipeName;
        recipeSteps.push(stepOne);
        recipe['recipeSteps'] = recipeSteps;
        const uri = process.env.myUri;
        const client = new MongoClient(uri);
        if(alreadyHasCollection(client)) {
            userID = String(storage.getItem("userID"));
            addRecipeToCollection(client, recipe);
            setTimeout(()=> {
                res.redirect('/recipes');
            },1000)
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
})

//Renders Main Page
app.get('/main', checkAuthenticated, (req,res) => {
    res.render('main.ejs', {recipeSteps: recipeSteps});
})

//Renders Recipe Page
app.get('/recipes', checkAuthenticated, putRecipeInArray, (req,res) => {
    res.render('recipes.ejs', {data: {userName: userName, recipeArray: recipeArray}});
})

//Renders FirstRecipe Page
app.get('/firstRecipe', isFirstRecipe, checkAuthenticated, (req,res) => {
    res.render('firstRecipe.ejs', {userName: userName});
})

//Form on recipe page that redirects user to Main Page
app.post('/toMain', (req,res) => {
    res.redirect('/main');
})

//Renders Register Page
app.get('/register', checkNotAuthenticated, (req,res) => {
    res.render('register.ejs')
})

//Saves user's name and password, encryps it, and stores it in database
app.post('/register', checkNotAuthenticated, async (req,res) => {
    try {
        var hashedPassword = await bcrypt.hash(req.body.password, 10)
        async function main() {
            const uri = process.env.myUri;
            const client = new MongoClient(uri);
            try{
                await client.connect();
                await addNewUser(client, {
                    username: req.body.username,
                    email: req.body.email,
                    password: hashedPassword
                });
                var user = await getUserByName(client, req.body.username);
                userID = String(user._id);
                sessionStorage.setItem("userID", userID);
                newUser = true;
            }
            catch(err){
                console.error(err);
            }
            finally{
                await client.close();
            }
        }
        main().catch(console.error);
        res.redirect('/')
    } catch (err) {
        return res.redirect('/register')
    }
})

//Deletes User Recipe from Database
app.delete('/logout', function (req,res, next) {
    req.logOut(function(err) {
        if(err) {
            return next(err)
        }
        res.redirect('/')
    })
 })

//Checks if user is authenticated
function checkAuthenticated(req,res,next) {
    if(req.isAuthenticated()) {
        return next();
    }
    else{
        res.redirect('/')
    }
}

//Checks if user is not authenrticated
function checkNotAuthenticated(req,res,next) {
    if(req.isAuthenticated()) {
        return res.redirect('/recipes');
    }
        next();
}

//Checks if user is new (doesn't have a recipe yet)
function checkNewUser(req, res, next) {
    if(!newUser) {
        return res.redirect('/recipes');
    }
    else {
        newUser = false;
        next();
    }
}

app.listen(3000)