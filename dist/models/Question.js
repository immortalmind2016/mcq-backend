"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schemaJsonTransform_1 = require("../utils/schemaJsonTransform");
const QuestionSchema = new mongoose_1.default.Schema({
    description: String,
    answers: Array(),
    correctAnswerIndex: Number,
}, Object.assign({}, schemaJsonTransform_1.schemaJsonTransform("Question")));
exports.Question = mongoose_1.default.model("Question", QuestionSchema);
//# sourceMappingURL=Question.js.map