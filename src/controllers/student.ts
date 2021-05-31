import { Request, Response } from "express";
import { Student } from "../models/Student";
import { IStudent, RequestWithBody } from "../types";
import { encodeId } from "../utils/encoding";

export const createStudent = (req: RequestWithBody, res: Response) => {
  console.log(req.body);
  let { name } = req.body;
  new Student({
    name,
  }).save((err, object) => {
    const student: IStudent = object;

    res.json({ id: encodeId("Student", student.id), name });
  });
};
