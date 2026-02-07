# 🚀 Backend Development Learning Repository

> A hands-on backend learning project focused on **real-world backend concepts** using **Node.js, Express, MongoDB, and Mongoose**.

This repository showcases my understanding of **backend architecture, database relationships, authentication, authorization, and media handling** — implemented in a structured and scalable way.

---

## 🧑‍💻 About the Project

This project was built to **strengthen backend fundamentals** by implementing commonly used features in production-level applications such as:

- Secure authentication & authorization
- Proper schema design
- CRUD APIs
- Cloud-based image uploads
- MongoDB relationships & population

---

## 🛠️ Tech Stack

| Technology | Purpose |
|----------|--------|
| **Node.js** | Backend runtime |
| **Express.js** | REST API framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | ODM for schema & relations |
| **JWT** | Token-based authentication |
| **Cookie-Parser** | Cookie handling |
| **Cloudinary** | Image storage |
| **Multer** | File uploads |
| **dotenv** | Environment variables |

---

## 📚 Concepts Implemented

### 🧩 1. Schema Design (Mongoose)
- Designed clean and scalable schemas
- Used:
  - Required & default fields
  - Timestamps
- Implemented **ObjectId references** to create relations between collections

```js
user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
}🔄 2. CRUD Operations

Implemented full CRUD APIs:

➕ Create

📖 Read (single & multiple)

✏️ Update

❌ Delete

✔ Proper HTTP status codes
✔ Try–catch based error handling
✔ Clean API responses

🖼️ 3. Image Upload (Cloudinary)

Used Multer to handle multipart/form-data

Uploaded images to Cloudinary

Stored image URL & public ID in MongoDB

Integrated uploads with schemas (users/posts)

📌 Use cases:

Profile images

Post images

🔗 4. MongoDB Relationships (ObjectId Reference)

Used referencing instead of embedding

Created relations like:

User → Posts

Post → Author

This keeps data normalized and scalable.

🔍 5. Populate (ObjectId → Collection Data)

Used .populate() to fetch related documents:

Post.find().populate("user")


✅ Converts ObjectId into full document
✅ Reduces extra API calls
✅ Cleaner frontend data handling

🔐 6. Authentication (JWT)

Implemented token-based authentication

On login:

Generated JWT using jwt.sign()

Stored token securely in cookies

Created middleware to protect routes

🛡️ 7. Authorization

Implemented role & ownership-based authorization

Ensured:

Only authenticated users access protected routes

Only owners/admins can delete or update data

🍪 8. Cookie Parser

Used cookie-parser to:

Store JWT in cookies

Access token via req.cookies

Verify token in middleware

🌱 9. Environment Variables (dotenv)

Secured sensitive credentials using .env:

MONGO_URI=your_mongodb_url
JWT_SECRET=your_jwt_secret
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx

🧠 Key Learnings

How backend systems work internally

Designing scalable MongoDB schemas

Secure authentication & authorization

Handling media uploads in backend

Writing clean, maintainable backend code

⚙️ How to Run Locally
git clone <repository-url>
cd project-folder
npm install
npm run dev


📌 Don’t forget to add a .env file with required variables.

👨‍🎓 Author

Anshu Kumar
MERN Stack Developer
Final Year B.E. (Information Technology)

⭐ Future Enhancements

Refresh token implementation

Pagination & filtering

API documentation (Swagger)

Rate limiting & security best practices

🙌 If you found this helpful

Give this repository a ⭐ and feel free to explore!


---

