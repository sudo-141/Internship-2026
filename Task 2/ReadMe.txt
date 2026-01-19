**************************************************************************************************************
In Task-1, you created your first MERN app and displayed data from an API. Now, let’s move one step ahead and build a To-Do List Application. 
This project will help you understand how the frontend (React) talks to the backend (Express) and 
how data is stored in MongoDB You will learn the most common operations in real applications: 
Add new data and View existing data (also called CRUD – Create and Read). 
Think of this project as the foundation for any future MERN application What You’ll Build (Requirements) :

1. Frontend (React): 
	- A text input and “Add Task” button. 
	- A task list to display all tasks fetched from the backend. 
2. Backend (Express + MongoDB): - 
	- Route: POST /add → To add a new task. 
	- Route: GET /tasks → To display all tasks. 
	- Store data in MongoDB Atlas (cloud database). 
3. Integration: 
	- React will send data to backend (Add Task). 
	- Backend will save data in MongoDB. 
	- React will fetch and display the saved tasks.

**************************************************************************************************************
#### To Start/View Project Please Use The Following Instructions -

1. install dependencies for backend server - (in "backend" folder) :
	a.) npm init -y 
	b.) npm install express mongoose cors dotenv
	c.) start backend - node server.js

2.) For making connection with "mongodb atlas" please follow the instructions as below - 
	a.) Environment Variables :

		Create a `.env` file in the backend folder and add:
		MONGO_URI=your_mongodb_connection_string
		PORT=5000

3.) To start frontend do this in (in "frontend" folder ) - 
	a.) npx create-react-app frontend
	b) npm start -> to start frontend.

/////// Thank You /////// 

**************************************************************************************************************