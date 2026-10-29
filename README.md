# Node.js & Express REST API

A beginner-friendly REST API built with **Node.js** and **Express.js** to perform CRUD (Create, Read, Update, Delete) operations on user data.

## 📌 Project Overview

This project demonstrates how a backend API handles HTTP requests and returns JSON responses. It supports creating, retrieving, updating, and deleting users through REST API endpoints.

User data is stored in an in-memory array, making this project suitable for learning and practicing REST API fundamentals.

## ✨ Features

- Create a new user
- Retrieve all users
- Retrieve a user by ID
- Update existing user information
- Delete a user by ID
- Handle requests using JSON
- Return appropriate HTTP status codes
- Handle requests for users that do not exist

## 🛠️ Technologies Used

- Node.js
- Express.js
- JavaScript
- REST API
- JSON
- Postman

## 📂 Project Structure

```text
node-users-api/
├── node_modules/
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

> `node_modules/` is generated when dependencies are installed and is excluded from Git using `.gitignore`.

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- Visual Studio Code (or another code editor)
- Postman for API testing

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/TT/node-users-api.git
```

**2. Navigate to the project directory**

```bash
cd node-users-api
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the server**

```bash
node server.js
```

The server runs at:

`http://localhost:3000`

To retrieve all users, open:

`http://localhost:3000/api/users`

## 🔗 API Endpoints

Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/users` | Retrieve all users |
| GET | `/api/users/:id` | Retrieve a user by ID |
| POST | `/api/users` | Create a new user |
| PUT | `/api/users/:id` | Update an existing user |
| DELETE | `/api/users/:id` | Delete a user by ID |

### Example JSON Request

Use the following JSON body when creating a user with `POST /api/users`:

```json
{
  "name": "Ahmed Khan",
  "email": "ahmed@example.com",
  "age": 26
}
```

In Postman, select **Body → raw → JSON** and send the request.

## 🧪 API Testing

All endpoints were tested using Postman to verify their basic functionality, including retrieving, creating, updating, and deleting users.

## 📚 Learning Outcomes

Through this project, I practiced:

- Understanding Node.js and Express.js
- Creating REST API routes
- Working with HTTP methods
- Handling request parameters and JSON request bodies
- Sending JSON responses and HTTP status codes
- Testing API endpoints with Postman
- Understanding CRUD operations

## ⚠️ Limitations

This project uses in-memory storage instead of a database. User data resets when the server restarts. It is intended for learning purposes and is not designed for production use.

## 👨‍💻 Author

**Asad Butt**

Computer Science Graduate | Aspiring Mobile App Developer

## 🔗 Repository

[View Node.js & Express REST API on GitHub](https://github.com/TT/node-users-api)
