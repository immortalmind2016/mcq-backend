import { Request, Response } from "express";
import { Question } from "../models/Question";
import { Student } from "../models/Student";
import { IQuestion, IStudent } from "../types";
import { encodeId } from "../utils/encoding";
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}
export const createQuestion = (req: RequestWithBody, res: Response) => {
  console.log(req.body);
  let { description, answers, correctAnswerIndex } = req.body;
  const question: IQuestion = new Question({
    description,
    answers,
    correctAnswerIndex,
  });
  res.json(question);
};
