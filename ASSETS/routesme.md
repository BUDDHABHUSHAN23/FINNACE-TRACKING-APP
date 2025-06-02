Certainly! Here's your content **properly formatted** with **clear separation between AUTH ROUTES and USER ROUTES**, keeping your original content unchanged—just improved formatting for `README.md`:

---

## ✅ TO CHECK THE ROUTES

🔗 `http://localhost:5050/api-v1`

---

## 🔐 AUTH ROUTES

---

### 1. Sign Up

📤 `POST http://localhost:5050/api-v1/auth/sign-up`

**Body to provide:**

```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john@example.com",
  "password": "yourpassword"
}
```

---

### 2. Sign In

📤 `POST http://localhost:5050/api-v1/auth/sign-in`

**Body example:**

```json
{
  "email": "john@example.com",
  "password": "yourpassword"
}
```

---

### 3. Get All Users (for testing)

📥 `GET http://localhost:5050/api-v1/auth/all`

---

### 4. Protected Route Example (needs JWT token)

🔒 `GET http://localhost:5050/api-v1/users/profile`

---

## 👤 USER ROUTES

---

### 5. Update User Details (Protected)

✏️ `PUT http://localhost:5050/api-v1/users/update`

**Body example:**

```json
{
  "firstname": "Jane",
  "lastname": "Smith",
  "county": "USA",
  "currency": "USD",
  "contact": "1234567890"
}
```

**Headers:**

```
Authorization: Bearer <your_jwt_token>
```

---

### 6. Change Password (Protected)

🔑 `POST http://localhost:5050/api-v1/users/change-password`

**Body example:**

```json
{
  "oldPassword": "yourOldPassword",
  "newPassword": "yourNewPassword"
}
```

**Headers:**

```
Authorization: Bearer <your_jwt_token>
```

---

Let me know if you'd like this as a downloadable `README.md` file or need it added to your GitHub project.
