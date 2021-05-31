import { Request, Response } from "express";
import { Types } from "mongoose";
import { Exam } from "../models/Exam";
import { Question } from "../models/Question";
import { Student } from "../models/Student";
import { IQuestion, IStudent, RequestWithBody } from "../types";
import { encodeId, decodeId } from "../utils/encoding";

export const submitExam = (req: RequestWithBody, res: Response) => {
  console.log(req.body);
  let { studentId, answers } = req.body as {
    studentId: string;
    answers: any[];
  };
  console.log(answers);
  const score: number = answers.reduce((prev, current) => {
    if (current.correctAnswerIndex == current.answerIndex) {
      return prev + 1;
    }
    return prev;
  }, 0);
  res.json({ score });
  new Exam({
    student: decodeId(studentId).id,
    answers: answers.map((answer) => ({
      ...answer,
      questionId: decodeId(answer.questionId).id,
    })),
    score,
  }).save((err, object) => {});
};
