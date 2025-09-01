# Backend Learning Projects

Welcome to my backend learning repository! This collection of projects demonstrates a progressive journey through the fundamentals of backend development using Node.js, Express, and MongoDB. Each project builds upon the last, introducing new concepts and technologies.


---

## Projects

Here’s a list of the projects included in this repository, ordered by complexity:

1.  **[Express-JS](#1-express-js)** - A simple "Hello World" application.
2.  **[Basic-User-API](#2-basic-user-api)** - A simple API to fetch user data from a JSON file.
3.  **[TodoApp](#3-todoapp)** - A full CRUD application for managing a to-do list with a database connection.
4.  **[BlogApp](#4-blogapp)** - A more advanced application with posts, likes, and comments.
5.  **[authapp](#5-authapp)** - A secure application with user authentication and authorization.
6.  **[File Upload](#6-file-upload)** - A project demonstrating how to handle file uploads to a server and cloud storage.

---

### 1. Express-JS

* **Description**: This is a foundational "Hello World" application that serves a single static HTML file using Express.js. It's the perfect starting point for understanding the basics of setting up a server.
* **Technologies Used**: Node.js, Express
* **Endpoints**:
    * `GET /`: Serves the `index.html` file.

---

### 2. Basic-User-API

* **Description**: This project introduces the concept of routing and handling data. It features a basic API that can retrieve all users or a specific user from a local `data.json` file, demonstrating how to handle simple GET requests.
* **Technologies Used**: Node.js, Express
* **Endpoints**:
    * `GET /users`: Retrieves a list of all users.
    * `GET /users/:id`: Retrieves a single user by their ID.

---

### 3. TodoApp

* **Description**: A classic "To-Do List" application with full CRUD (Create, Read, Update, Delete) functionality. This project connects to a MongoDB database to persist to-do items, making it a complete, albeit simple, backend application.
* **Technologies Used**: Node.js, Express, MongoDB
* **.env File**:
    ```
    PORT=3000
    DATABASE_URL=<your-mongodb-connection-string>
    ```
* **Endpoints**:
    * `POST /todos`: Creates a new to-do item.
    * `GET /todos`: Retrieves all to-do items.
    * `GET /todos/:id`: Retrieves a single to-do item by its ID.
    * `PUT /todos/:id`: Updates a to-do item by its ID.
    * `DELETE /todos/:id`: Deletes a to-do item by its ID.

---

### 4. BlogApp

* **Description**: A simple blogging platform where users can create posts, and then "like" and "comment" on them. This project uses a MongoDB database and demonstrates more complex data modeling with relationships between posts, likes, and comments.
* **Technologies Used**: Node.js, Express, MongoDB
* **.env File**:
    ```
    PORT=3000
    DATABASE_URL=<your-mongodb-connection-string>
    ```
* **Endpoints**:
    * `POST /posts`: Creates a new blog post.
    * `GET /posts`: Retrieves all blog posts.
    * `POST /likes`: Likes a blog post.
    * `DELETE /likes/:id`: Unlikes a blog post.
    * `POST /comments`: Adds a comment to a blog post.

---

### 5. authapp

* **Description**: This project focuses on a critical aspect of backend development: user authentication. It features a secure login and signup system using JSON Web Tokens (JWT) for authentication and `bcrypt` for password hashing. It also includes middleware to protect routes, ensuring that only authenticated users can access them.
* **Technologies Used**: Node.js, Express, MongoDB, JWT, bcrypt
* **.env File**:
    ```
    PORT=3000
    DATABASE_URL=<your-mongodb-connection-string>
    JWT_SECRET=<your-jwt-secret-key>
    ```
* **Endpoints**:
    * `POST /signup`: Registers a new user.
    * `POST /login`: Logs in a user and returns a JWT.
    * `GET /test`: A test route protected by authentication middleware.

---

### 6. File Upload

* **Description**: This project demonstrates how to handle file uploads, a common requirement for many web applications. It allows for uploading files to both a local server and a cloud storage service (Cloudinary), introducing another layer of complexity to backend development.
* **Technologies Used**: Node.js, Express, MongoDB, Multer, Cloudinary
* **.env File**:
    ```
    PORT=3000
    DATABASE_URL=<your-mongodb-connection-string>
    CLOUD_NAME=<your-cloudinary-cloud-name>
    API_KEY=<your-cloudinary-api-key>
    API_SECRET=<your-cloudinary-api-secret>
    ```
* **Endpoints**:
    * `POST /localFileUpload`: Uploads a file to the local server.
    * `POST /imageUpload`: Uploads an image to Cloudinary.
    * `POST /videoUpload`: Uploads a video to Cloudinary.

---

## How To Run

To run any of these projects, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    ```
2.  **Navigate into the project's directory:**
    ```bash
    cd <project-folder-name>
    ```
3.  **Install the dependencies:**
    ```bash
    npm install
    ```
4.  **Create and Configure the `.env` file:**
    * For projects that require it, you'll need to create a file named `.env` in the root of that specific project's directory (e.g., inside `TodoApp/`, `BlogApp/`, etc.).
    * Inside the `.env` file, copy the variables listed for that project (e.g., `PORT`, `DATABASE_URL`).
    * Replace the placeholder values (like `<your-mongodb-connection-string>`) with your actual credentials and secret keys. This file stores your private information securely.
5.  **Start the server:**
    ```bash
    npm start
    ```