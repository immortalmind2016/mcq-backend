import { Request, Response } from "express";
import { Types } from "mongoose";
import { Question } from "../models/Question";
import { Student } from "../models/Student";
import { IQuestion, IStudent } from "../types";
import { encodeId, decodeId } from "../utils/encoding";
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
  query: { [key: string]: string | string[] | undefined };
}

export const createQuestion = (req: RequestWithBody, res: Response) => {
  console.log(req.body);
  let { description, answers, correctAnswerIndex } = req.body;
  new Question({
    description,
    answers,
    correctAnswerIndex,
  }).save((err, object) => {
    const question: IQuestion = object;
    res.json(question);
  });
};

export const getQuestion = async (req: RequestWithBody, res: Response) => {
  console.log(req.params);

  let alreadyUsedIds;
  alreadyUsedIds = req.query.alreadyUsedIds || "[]";
  console.log(
    "🚀 ~ file: question.ts ~ line 26 ~ getQuestion ~ alreadyUsedIds",
    alreadyUsedIds
  );
  alreadyUsedIds = JSON.parse(alreadyUsedIds).map((id) =>
    Types.ObjectId(decodeId(id).id)
  );
  console.log(
    "🚀 ~ file: question.ts ~ line 27 ~ getQuestion ~ alreadyUsedIds",
    alreadyUsedIds
  );
  let { description, answers } = req.body;
  const counter = await Question.count();
  // We can random also with Math.rand()*counter
  let random = Date.now() % counter;
  console.log(
    random,
    "🚀 ~ file: question.ts ~ line 40 ~ getQuestion ~ random"
  );
  console.log(await Question.findOne());
  const question: IQuestion = await Question.findOne({
    id: { $nin: alreadyUsedIds },
  }).skip(random);
  res.json(question || {});
};
