# Project Name

## Overview
This is a full-stack MERN application built with:
- Backend: Node.js, Express.js, MongoDB
- Frontend: React.js (Vite) with Tailwind CSS

## Prerequisites
Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (vXX.X.X)
- [MongoDB](https://www.mongodb.com/)

## Project Structure
```
your-repo-name/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── config/
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── package.json
├── README.md
```

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone https:https://github.com/nitesh052000/Expense-Tracker.git
cd Expense-Tracker
```

---

### 2. Setup Backend

- Go to backend folder:
  ```bash
  cd backend
  ```
- Install backend dependencies:
  ```bash
  npm install
  ```
- Create a `.env` file inside `backend/`:
  ```
  MONGO_URI=your_mongodb_connection_string
  PORT=5000
  JWT_SECRET=your_jwt_secret
  ```
- Run the backend server:
  ```bash
  npm run dev
  ```

> The backend will start at `http://localhost:5000`

---

### 3. Setup Frontend

- Open a new terminal, then navigate to frontend:
  ```bash
  cd frontend
  ```
- Install frontend dependencies:
  ```bash
  npm install
  ```
- Run the React (Vite) frontend:
  ```bash
  npm run dev
  ```

> The frontend will start at `http://localhost:5173`

---

## Available Scripts

### Backend (in `/backend`)
- `npm run dev` — Start the backend server using Nodemon.

### Frontend (in `/frontend`)
- `npm run dev` — Start the Vite dev server for the frontend.

---

## Technologies Used
- **Frontend:**
  - React.js
  - Vite
  - Tailwind CSS
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB with Mongoose
- **Authentication**
  - JWT (JSON Web Tokens)

---

## Contact
For any queries or support, feel free to contact:

**Nitesh**  
Email: niteshkhandelwal0504@gmail.com

