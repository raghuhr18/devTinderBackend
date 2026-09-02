- Create a respository
- Initialize the repository
- Know about Package.json, packageLock.json
- Install Express.js and create a sercer
- Listen to port 7777
- Create Request Handlers /test ...... 
- Install nodemon and update the scrips inside package.json

- Createa a Git Repository
- Add git ignore file
- Push the changes to remote repository from the local
- Sequence of code matters (routing)
- Install Postman and make the workspace > Collection
- Write logic to handle GET, POST, PATCH, DELETE api calls and test them using postman

- Handling multiple route handlers
- Use of Next function
- What is middleware and why do we need it?
- How express.js handles requests behind the scenes
- Create a middleware folder and keep authMiddleware and userMiddleware inside them
- Use the (err, req, res, next) - learn to use the err also here

- Create a free cluster on mongoDB official website(mongo atlas)
- Install mongoose library
- Connect your application with Database
- Call the connectDB function and connect to database before starting application
- Use mongoose, Create userSchema and user model
- Create /signup API and add the data to database
- Push some data using API calls from Postman
- always use try and catch blocks when you're communicating with the database

- Findout the differences between JSOna nd Javascript Objects
- Add the express.json() middleware to your app
- Make your signup API dynamic to receive the data and save it into the database
- By using the get method and get the user from the database User.find(email)- use try, catch block 
- By passing empty object inside the find(), get all the userswhich are therein the database
- Built 2 API's /user - gets the particular user from the databse. -/feed - gets you all the users from the database
- Create a deleteUser API and delete the user from the database
- Create PATCH method in the API and update the user details

- Explore the schema type options from the documentation
- add required, unique, min, minLength, trim etc
- add default value and create a custom validtaions for gender and improve the user schema by putting all the appropriate validations
- Add Timestamps to the userSchema
- Add the API level validations for the patch and post API's
- Limit the number of skills - (add the custom validation)
- Import the validator npm package...and add the validation to the email, PhotoURL etc...(Custom Validation)
- Explore the Validator library functionsand use them use them for (passwords, email, photoURL's)

- Create a Separate file in utile folder and name it as validtion.js
- Add all the validations for the /signUp method and call it inside try by passing req.body into it
- To save the passoword into the database, It needs to be hashed...
- Install the bcrypt library, hash the password by adding the salts and save it....
- Explicitly create a new user instance and then save it - (best way to save the user) - which should include your hashedPassword
- Create a /login API
- step1: Get the entered email and password from the request.body
- step2: Check whether the entered email i spresent in the DB  - await User.findOne({ email: email })
- step3: Now compare the passwords - await bcrypt.compare(password, user.password);
- step4: If there is a match - only then allow the user to login else Throw Error
<!-- mongodb+srv://NamasteNodeJS:8CYsGxzghiEwgFC1@cluster0.ucsxjik.mongodb.net/ -->