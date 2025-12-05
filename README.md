# ✈ FlightBooker — Full Stack Flight Booking System

![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)
![Language](https://img.shields.io/badge/TypeScript-100%25-blue?style=for-the-badge)
![Backend](https://img.shields.io/badge/Backend-Express%20%2B%20Prisma-orange?style=for-the-badge)
![Frontend](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-blueviolet?style=for-the-badge)
![Database](https://img.shields.io/badge/DB-PostgreSQL%20(Render)-316192?style=for-the-badge&logo=postgresql)
![Hosting](https://img.shields.io/badge/Hosting-Render%20%2B%20Vercel-black?style=for-the-badge)

---

## 🖼 Screenshots Preview

| Home | Search | Results |
|---|---|---|
| ![](screenshots/home.png) | ![](screenshots/search.png) | ![](screenshots/results.png) |

| Details | Success | History |
|---|---|---|
| ![](screenshots/details.png) | ![](screenshots/success.png) | ![](screenshots/history.png) |

---

## 📂 Project Structure

```
FlightBooker/
│── backend/       → Node + Express + Prisma + Auth API
│── frontend/      → React + Vite + Tailwind + Axios
└── README.md
```

---

## 🔧 Backend Setup (Express + Prisma + PostgreSQL)

```bash
cd backend
npm install
```

### 📄 Create `.env` inside backend

```
DATABASE_URL="postgresql://<USERNAME>:<PASSWORD>@<HOST>:5432/<DB_NAME>?sslmode=require"
JWT_SECRET="your_secret_key_here"
PORT=4000
```

🔹 DB URL taken from **Render PostgreSQL Dashboard**  
🔹 `sslmode=require` **must be included** for production

---

### ▶ Initialize DB

```bash
npx prisma migrate deploy
```

### 🌍 Seed flights for next 4 months

```bash
npm run prisma:seed
```

### 🚀 Start server

```bash
npm run dev
```

Backend Live →  
👉 http://localhost:4000

---

## 🌐 Frontend Setup (React + Vite)

```bash
cd frontend
npm install
```

### 📄 Create `.env`

```
VITE_API_URL=http://localhost:4000
```

### Run client

```bash
npm run dev
```

Frontend running →  
👉 http://localhost:5173

---

## 🚀 Production Build

### Backend

```bash
cd backend
npm run build
node dist/index.js
```

### Frontend

```bash
cd frontend
npm run build
```

Output → `/frontend/dist`

---

## 🔥 Features

- JWT Login + Persistent Auth
- Search + Filter flights
- Booking with passenger details
- Booking history dashboard
- Seeder — generates flights for **120+ days**
- Fully responsive UI
- Typescript everywhere (Backend + Frontend)

---

## 🛣 API Routes

| Method | Endpoint | Purpose |
|---|---|---|
| POST `/auth/signup` | Register user |
| POST `/auth/login` | Get Token |
| GET `/flights/search` | Search flights |
| POST `/booking` | Create booking |
| GET `/booking/:id` | Booking details |
| GET `/booking` | User booking history |

---

## 🌍 Deployment Guide

### 🔹 Backend — Render

| Setting | Value |
|---|---|
| **Root Directory** | `backend` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `node dist/index.js` |
| **Environment Vars** | DATABASE_URL, JWT_SECRET, PORT=4000 |

📌 Must attach **Render PostgreSQL DB**  
Then copy `DATABASE_URL` into **backend env**

---

### 🔹 Frontend — Render or Vercel

| Setting | Value |
|---|---|
| Root Directory | `frontend` |
| Build Command | `npm run build` |
| Publish Directory | `dist` |

📌 Env Required

```
VITE_API_URL=https://your-backend-url.onrender.com
```

### SPA Route Fix (Render)

| Source | Destination | Type |
|---|---|---|
| `/*` | `/index.html` | Rewrite |

---

## 🏁 Done — Fully Deployable ⚡

Clone ▼  
Install ▼  
Connect DB ▼  
Deploy 🎉

