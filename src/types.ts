import { Document } from "mongoose";

export interface IExam extends Document {
  name: string;
  student: string;
  questions?: string[];
  answers?: string[];
}
export interface IStudent extends Document {
  name: string;
}
export interface IQuestion extends Document {
  description: string;
  answers: string[];
  correctAnswerIndex: number;
}
