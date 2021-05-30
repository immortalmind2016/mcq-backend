import { Request, Router } from "express";
import { createQuestion } from "../controllers/question";
const router = Router();
router.post("/", createQuestion);
export default router;
