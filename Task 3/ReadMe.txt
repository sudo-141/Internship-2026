**************************************************************************************************************
In Task-2, you built a simple To-Do List App where you could add and view tasks. 
That gave you an introduction to connecting React with Express and MongoDB. 
Now, let’s level it up. In Task-3, you will add Update (Edit) and Delete features to your To-Do List app. 
This means your application will now support full CRUD operations (Create, Read, Update, Delete). 
This project will help you understand how to: 
• Use PUT and DELETE API methods in Express. 
• Update UI dynamically in React. 
• Handle database changes in real-time. 
By the end of this task, your app will function like a real-world task manager. 
What you will build : 

1 Backend (Express + MongoDB) : 
> Add API route PUT /update/ :id -> Update a task (mark completed or edit text)
> Add API route PUT /delete/ :id -> Delete a task from DB.

2. Frontend (React) : 
> Each task will have : -> Edit button - Allows editing a task text, Delete button - removes taks., 
Update UI immediately after changes.

3. Extra (optional) : 
> Add checkbox to mark as completed.

**************************************************************************************************************
#### To Start/View Project Please Use The Following Instructions -

1. install dependencies for backend server - (in "backend" folder) :
	a.) npm init -y 
	b.) npm install express mongoose cors dotenv
	c.) start backend - npm start

2.) For making connection with "mongodb atlas" please follow the instructions as below - 
	a.) Environment Variables :

		Create a `.env` file in the backend folder and add:
		MONGO_URI=your_mongodb_connection_string
		PORT=5000

3.) To start frontend do this in (in "frontend" folder ) - 
	a.) npx create-react-app frontend
	b.) npm install axios
	c) npm start -> to start frontend.

/////// Thank You /////// 

**************************************************************************************************************