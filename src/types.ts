import { Request } from "express";
import { Document } from "mongoose";

export interface IExam extends Document {
  name: string;
  student: string;
  questions?: string[];
  answers?: {
    answerIndex: number;
    questionId: string;
  }[];
}
export interface IStudent extends Document {
  name: string;
}
export interface IQuestion extends Document {
  description: string;
  answers: string[];
  correctAnswerIndex: number;
}
export interface RequestWithBody extends Request {
  body: { [key: string]: string | any[] | undefined };
  query: { [key: string]: string | string[] | undefined };
}
