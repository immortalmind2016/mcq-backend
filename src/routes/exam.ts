import { Request, Router } from "express";
import { submitExam } from "../controllers/exam";
const router = Router();
router.post("/", submitExam);

export default router;
