# 📝 Blogging Website (MERN Stack)

A full-stack blogging platform where users can sign up, log in, create blogs, and read posts.  
This project is built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)** with **Tailwind CSS** for styling.

---

## 🚀 Features
- User authentication (signup & login)
- Create, read, and manage blog posts
- Responsive UI with Tailwind CSS
- Secure password hashing with bcrypt
- RESTful API with Express.js
- MongoDB database integration

---

## 🛠️ Tech Stack
**Frontend:**
- React.js  
- React Router  
- Tailwind CSS  

**Backend:**
- Node.js  
- Express.js  
- MongoDB (via Mongoose)  

---

## 📂 Project Structure
Blogging Website/
│
├── client/ # React frontend
│ ├── public/
│ ├── src/
│ │ ├── pages/ # Login, Signup, Home, CreateBlog, BlogDetails
│ │ ├── components/
│ │ └── App.js
│ └── package.json
│
├── server/ # Node.js backend
│ ├── models/ # Mongoose models
│ ├── routes/ # API routes (auth, blog)
│ ├── server.js # Entry point
│ └── package.json
│
└── README.md # Project documentation
