import mongoose from "mongoose";
import { IStudent } from "../types";
import { schemaJsonTransform } from "../utils/schemaJsonTransform";

const StudentSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    ...schemaJsonTransform("Question"),
  }
);

export const Student = mongoose.model<IStudent>("Student", StudentSchema);
