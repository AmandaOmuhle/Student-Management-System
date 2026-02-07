

# Student Management System

A full-stack web application for managing student records. Built with **React**, **Node.js**, **Express**, and **MongoDB**, this project demonstrates CRUD (Create, Read, Update, Delete) functionality and integration between frontend and backend.

---

## 🚀 Tech Stack

- **Frontend:** React, Axios, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Other Tools:** Git, dotenv (for environment variables), CORS
This was my first time using more advanced technology stacks, so it was very challanges but that is what kept me pushing, because thats how you learn.

Challenges Faced
Case sensitivity in imports: On Windows, having both App.js and app.js caused compilation errors. Fixed by standardizing file names.

CORS issues: Requests from frontend (port 3000/3002) to backend (port 5000) were blocked until cors middleware was added.

Axios configuration: Hardcoding URLs caused confusion; solved by creating a central Axios instance with baseURL.

Git misconfiguration: Accidentally initialized Git in the wrong folder, which tracked thousands of files. 

Environment variables: Needed to move MongoDB URI and port into .env for flexibility and security.

 1. Clone the repository
git clone https://github.com/YourUsername/student-management-system.git
cd student-management-system


