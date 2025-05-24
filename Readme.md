# PERN-Financial-Application

This is a simple financial application that allows users to create accounts, deposit and withdraw money, and view their financial data.

---

## 🚀 Project Overview

A full-stack application built using the PERN stack (PostgreSQL, Express.js, React, Node.js) with Tailwind CSS for styling and Zustand for state management.
  [Video Link](https://www.youtube.com/watch?v=SAdRcCMSjL0&t=818s)
---

### 📁 GitHub Repository

👉 [GitHub - FINNACE-TRACKING-APP](https://github.com/BUDDHABHUSHAN23/FINNACE-TRACKING-APP)

---

## 🧩 Tech Stack

### 🔷 Frontend

- **Framework:** [Vite + React](https://vite.dev/guide/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)
- **State Management:** [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)  
  👉 [Zustand Demo](https://zustand-demo.pmnd.rs/)

---

### 🔶 Backend

- **Runtime:** Node.js
- **Database:** PostgreSQL  
  → [node-postgres (pg)](https://node-postgres.com/)
- **Database GUI:** [PgAdmin (Download)](https://www.postgresql.org/ftp/pgadmin/pgadmin4/v9.3/windows/)

---

## 🧮 Render Dashboard (for Hosting & Visualization)

- 🌐 [Render Dashboard](https://dashboard.render.com/login)
- **Service Name:** `EXPENSE-TRACKING`
- **Database Name:** `expense_tracker`
- **User Role:** `expense_admin`
- **PostgreSQL Version:** 16

---

### ✅ Key Features

- User authentication
- Account creation
- Deposit and withdrawal functionality
- Real-time expense tracking and analytics
- Clean and responsive UI with Tailwind CSS
- Lightweight global state with Zustand

---

Here's your backend setup guide written in proper and clean **Markdown format**:

---

# 🔶 Backend Setup Guide

### ✅ Step 1: Initialize Node.js Project

Install Node.js and npm (if not already installed), then initialize a new Node.js project:

```bash
npm init -y
```

> This command will create a default `package.json` file to manage your project dependencies.

---

### ✅ Step 2: Install Required Dependencies

Install essential Node.js packages for building a backend with **Express** and **PostgreSQL**:

```bash
npm install express bcrypt cors dotenv jsonwebtoken pg
```

**Packages explained:**

* `express`: For building the server and APIs.
* `bcrypt`: For hashing passwords.
* `cors`: To enable Cross-Origin Resource Sharing.
* `dotenv`: To manage environment variables.
* `jsonwebtoken`: To handle authentication via JWT.
* `pg`: PostgreSQL client for Node.js.

---

### ✅ Step 3: Configure Environment Variables for Database

Create a `.env` file in the root of your backend project to store your PostgreSQL connection URL securely:

```
DATABASE_URL=postgresql://expense_admin:stwX7c7AD5Bsumr6foIprREFfYbqjcXg@dpg-d0on6codl3ps73a4tck0-a.oregon-postgres.render.com/expense_tracker_mudg
```

> This connection string includes:
>
> * **Username:** `expense_admin`
> * **Password:** `stwX7c7AD5Bsumr6foIprREFfYbqjcXg`
> * **Host:** `dpg-d0on6codl3ps73a4tck0-a.oregon-postgres.render.com`
> * **Database:** `expense_tracker_mudg`

---

### ✅ Step 4: Set Up PgAdmin4 for Local PostgreSQL Connection

Use the above credentials to connect to the **PostgreSQL** database via **PgAdmin4**.

#### Connection Steps in PgAdmin4:

1. Open **PgAdmin4**.
2. Right-click on **Servers** → *Create* → *Server*.
3. Under the **General** tab, give a name (e.g., `RenderDB`).
4. Go to the **Connection** tab and fill in:

   * **Host name/address**: `dpg-d0on6codl3ps73a4tck0-a.oregon-postgres.render.com`
   * **Port**: `5432`
   * **Username**: `expense_admin`
   * **Password**: `stwX7c7AD5Bsumr6foIprREFfYbqjcXg`
   * Check **Save Password**
5. Click **Save** to establish the connection.
6.Permission issue 
  -- Basic schema access
  GRANT CREATE, USAGE ON SCHEMA public TO expense_admin;

  -- Table permissions
  GRANT ALL ON ALL TABLES IN SCHEMA public TO expense_admin;

  -- Future tables
  ALTER DEFAULT PRIVILEGES 
  GRANT ALL ON TABLES TO expense_admin;
---

### ✅ Connection Screenshot

![PostgreSQL Render Connection in PgAdmin](image-1.png)

---

Let me know if you’d like to continue with the folder structure or API routes next.
