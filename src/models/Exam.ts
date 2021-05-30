import mongoose from "mongoose";
import { IExam } from "../types";
const ExamSchema = new mongoose.Schema({
  name: String,
  student: String,
});

export const Exam = mongoose.model<IExam>("Exam", ExamSchema);
