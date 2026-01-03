import { Router } from "express";
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = Router();

router.post("/", createUser); // POST /users
router.get("/", getUsers); // GET /users
router.get("/:id", getUser); // GET /users/:id
router.put("/:id", updateUser); // PUT /users/:id
router.delete("/:id", deleteUser); // DELETE /users/:id

export default router;
