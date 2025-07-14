# 🔗 URL Shortener – Frontend Test Submission

This repository contains the solution to a frontend test submission. It consists of:

- ✅ A custom **Logging Middleware** built with Node.js
- ✅ A complete **Fullstack URL Shortener** application with a beautiful React frontend and Express backend

---

## 📁 Folder Structure

12222771/
├── logging middleware/ # Custom logger (writes request logs to file)
│ └── logger.js
│
├── frontend test submission/ # Express backend + React frontend
│ ├── app.js # Express server
│ ├── urls.json # Local "database" for shortened URLs
│ ├── package.json # Backend dependencies
│ └── client/ # React frontend app
│ ├── src/
│ │ ├── App.js
│ │ └── App.css
│ ├── public/
│ └── package.json

yaml
Copy
Edit

---

## 🚀 Features

- 🔗 Shorten any long URL
- 🎨 Beautiful and responsive React frontend
- 📝 Logs all incoming requests using custom middleware
- 📋 One-click copy button for shortened URL
- ❌ Error handling with visual feedback
- ⚙️ Fully modular structure for clean separation of concerns

---

## ⚙️ How to Run Locally

### 1. Clone the repo


git clone https://github.com/Sjais6165/12222771.git
cd 12222771
2. Start the backend (Express)
bash
Copy
Edit
cd "frontend test submission"
npm install
node app.js
3. Start the frontend (React)
bash
Copy
Edit
cd client
npm install
npm start
The React app will open in your browser at http://localhost:3000
(If it conflicts with the backend port, it will open on 3001 instead.)

📦 Dependencies
Backend:
express

nanoid@3.3.4 (for unique short IDs)

cors

Custom logging middleware

Frontend:
react

fetch API

CSS animations and styling

👩‍💻 Author
Sushmita Jaiswal
Frontend Test Submission | Fullstack Developer
🔗 GitHub: @Sjais6165
