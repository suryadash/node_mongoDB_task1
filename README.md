Download or clone the Repo
Run npm install to install all dependencies
After that run "nodemon app.js" or "node app.js" .
Now open Postman and a make a post request to "http://localhost:3000/user" with body as follows:
     {
	    "userName" : "surya"
     }
If this user is the first to register you will see a message "Admin created" else "user created" in the response.
To fetch all users make a get request to "http://localhost:3000/all-users"
