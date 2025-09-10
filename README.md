
# Course Management API

## Project Overview
This is a **Course Management API** built with **Node.js, Express.js, and MongoDB**.  
It allows users to **register/login**, **browse courses**, and **purchase them**. Admins have additional privileges to create and delete courses. The API follows the **MVC pattern**, implements **JWT-based authentication**, and includes **input validation and centralized error handling**.

---

## Features
### User Authentication
- JWT-based authentication
- Roles: `user` and `admin`
- Admin-only access for course creation and deletion

### Course Management
- **Admin:** Create and delete courses
- **Users:** Get all courses or a single course by ID

### Purchase System
- Logged-in users can purchase courses
- Stores `userId`, `courseId`, `amount`, and `date`
- Users can view their purchased courses

### Validation & Error Handling
- Input validation with **Zod**
- Centralized error handling middleware
- Passwords hashed using **bcrypt**

---

## Installation Guide

1. **Clone the repository**
 git clone https://github.com/EngrMunir/course-management-api.git
cd course-management-api
npm install
npm run start:dev

## API Endpoints
## Create Course
http://localhost:5000/api/course
method: POST
## Course Delete
http://localhost:5000/api/course/:courseId
method: DELETE
## Get All Course
http://localhost:5000/api/course
method: GET
## Get Single Course
http://localhost:5000/api/course/:courseId
method: GET
## Create User
http://localhost:5000/api/auth/register
method: POST
## Login
http://localhost:5000/api/auth/login
## Purchase
http://localhost:5000/api/purchase
method: POST
## my-purchase
http://localhost:5000/api/purchase/my-purchases
method: GET
## Get all user
http://localhost:5000/api/user
method: GET

git clone https://github.com/<your-username>/course-management-api.git
cd course-management-api
