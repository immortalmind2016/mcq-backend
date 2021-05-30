import mongoose from "mongoose";
import { IQuestion } from "../types";
import { schemaJsonTransform } from "../utils/schemaJsonTransform";
const QuestionSchema = new mongoose.Schema(
  {
    description: String,
    answers: Array(),
    correctAnswerIndex: Number,
  },
  {
    ...schemaJsonTransform("Question"),
  }
);

export const Question = mongoose.model<IQuestion>("Question", QuestionSchema);
