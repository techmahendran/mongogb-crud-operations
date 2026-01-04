// import express from "express";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT;

// app.use(express.json());

// // DB
// connectDB();

// // Routes
// app.use("/users", userRoutes);

// app.get("/", (req, res) => {
//   res.send("Express + MongoDB CRUD working");
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();

// ✅ Enable CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/todos_db")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/api/todos", todoRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
