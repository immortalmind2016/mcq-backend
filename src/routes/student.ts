import { Request, Router } from "express";
import { createStudent } from "../controllers/student";
const router = Router();
router.post("/", createStudent);
export default router;
