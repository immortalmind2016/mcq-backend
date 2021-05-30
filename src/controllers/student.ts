import { Request, Response } from "express";
import { Student } from "../models/Student";
import { IStudent } from "../types";
import { encodeId } from "../utils/encoding";
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}
export const createStudent = (req: RequestWithBody, res: Response) => {
  console.log(req.body);
  let { name } = req.body;
  const student: IStudent = new Student({
    name,
  });
  res.json({ id: encodeId("Student", student.id), name });
};
