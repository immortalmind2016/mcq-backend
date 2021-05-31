import { Request, Response } from "express";
import { Types } from "mongoose";
import { Question } from "../models/Question";
import { Student } from "../models/Student";
import { IQuestion, IStudent, RequestWithBody } from "../types";
import { encodeId, decodeId } from "../utils/encoding";

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
  let alreadyUsedIds;
  alreadyUsedIds = req.query.alreadyUsedIds || "[]";
  console.log(
    "🚀 ~ file: question.ts ~ line 26 ~ getQuestion ~ alreadyUsedIds",
    alreadyUsedIds
  );
  alreadyUsedIds = JSON.parse(alreadyUsedIds).map((id) => decodeId(id).id);
  console.log(
    "🚀 ~ file: question.ts ~ line 27 ~ getQuestion ~ alreadyUsedIds",
    alreadyUsedIds
  );
  let { description, answers } = req.body;
  const counter = await Question.count();
  // We can random also with Math.rand()*counter
  let random = Date.now() % (counter - 2);

  console.log(
    random,
    "🚀 ~ file: question.ts ~ line 40 ~ getQuestion ~ random"
  );

  const question2 = await Question.aggregate([
    {
      $sample: { size: 1 },
    },
    {
      $match: { _id: { $nin: alreadyUsedIds } },
    },
  ]);
  console.log(question2);
  const question: IQuestion = await Question.findOne({
    _id: { $nin: alreadyUsedIds },
  }).skip(random);
  res.json({ id: encodeId("Question", question2[0]?._id), ...question2[0] });
};
