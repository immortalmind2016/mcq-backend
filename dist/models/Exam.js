"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exam = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ExamSchema = new mongoose_1.default.Schema({
    name: String,
    student: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Student",
    },
    score: Number,
    answers: [
        {
            correctAnswerIndex: Number,
            answerIndex: Number,
            questionId: {
                type: mongoose_1.default.Schema.Types.ObjectId,
                ref: "Question",
            },
        },
    ],
});
exports.Exam = mongoose_1.default.model("Exam", ExamSchema);
//# sourceMappingURL=Exam.js.map