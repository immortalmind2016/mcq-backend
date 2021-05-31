import mongoose from "mongoose";
import { IExam } from "../types";
const ExamSchema = new mongoose.Schema({
  name: String,
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
  score: Number,
  answers: [
    {
      correctAnswerIndex: Number,
      answerIndex: Number,
      questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
      },
    },
  ],
});

export const Exam = mongoose.model<IExam>("Exam", ExamSchema);
