import { Response } from "express";
import { RequestWithBody } from "../types";
export declare const createQuestion: (req: RequestWithBody, res: Response) => void;
export declare const getQuestion: (req: RequestWithBody, res: Response) => Promise<void>;
