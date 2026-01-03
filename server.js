import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

// DB
connectDB();

// Routes
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Express + MongoDB CRUD working");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
