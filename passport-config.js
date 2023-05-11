//for local version of passport's strategy
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

//We are using passport so that we can securely and easily handle comparing passwords and emails
//As well as creating error messages


function initialize(passport, getUserByEmail, getUserById) {
    //function for authenticating our user
    const authenticateUser = async (email, password, done) =>{
        
        //This function will be iomplemented above
        const user =  await getUserByEmail(email)
        console.log(user);
        //Here we are seeing if the email exists and if does return null
        //But if it doesn't compare the passwords 
        if(user == null)
        {

            return done(null, false, {message: "There is no user with that email"})
        }
        try{
            console.log(user.password + password)
            if(await bcrypt.compare(password, user.password))
            {
                return done(null, user)
            }
            else
            {
                return done(null, false, {message: "Password Incorrect"})
            }
        }
        catch(err){
            return done(err)
        }
    }
    //Here we set the username of passport as email because when the 
    //user logs in they will using the email as a username
    //Password doesn't need to be set as we already saved it as password
    passport.use(new LocalStrategy({usernameField: 'email'}, authenticateUser))
    
    //Here we are encoding and decoding the username field so when
    //this info is passed to passport it can't be stolen
    passport.serializeUser((user, done) => done(null, user._id))
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id))
    })
}

//We put this so that the function we made above can be targeted in our server.ts file
module.exports = initialize