**************************************************************************************************************
In Task-3, you built a To-Do app with full CRUD operations. Now, let’s move to the next essential skill of web development → Authentication. 
You will create a Login and Signup System using JWT (JSON Web Token). 
This is the same system used by real-world apps like Facebook, Gmail, or any e-commerce site where,
 users have to log in before accessing features. 
What you'll build (Requirements) : 

1. Backend (Express + MongoDB) : 

- create a User Model with Fields 
- Name, Email, Password. - Add route : /register -> Register new user (password should be hashed). 
- Add route : /login -> verify user and return JWT Token. 
- Create a protected route (example: /profile) that only logged-in users can access with a valid token). 

2. Frontend (React) : 

- create Register Page -> User enters name, email, password. 
- create Login page -> user enters email, password -> store token in localStorage. 
- if logged in -> show welcome page (Dashboard) with user details. 
- add logout button to clear token.

**************************************************************************************************************
#### To Start/View Project Please Use The Following Instructions -

1. install dependencies for backend server - (in "backend" folder) :
	a.) npm init -y 
	b.) npm install express mongoose bcryptjs jsonwebtoken cors dotenv
	c.) start backend - npm start

2.) For making connection with "mongodb atlas" please follow the instructions as below - 
	a.) Environment Variables :

		Create a `.env` file in the backend folder and add:
		MONGO_URI=your_mongodb_connection_string
		PORT=5000

3.) To start frontend do this in (in "frontend" folder ) - 
	a.) npx create-react-app frontend
	b.) npm install axios react-router-dom
	c) npm start -> to start frontend.

/////// Thank You /////// 

**************************************************************************************************************