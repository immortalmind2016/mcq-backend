import { Request, Router } from "express";
import { createQuestion, getQuestion } from "../controllers/question";
const router = Router();
router.post("/", createQuestion);
router.get("/", getQuestion);

export default router;
