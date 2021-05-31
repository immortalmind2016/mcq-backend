"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitExam = void 0;
const Exam_1 = require("../models/Exam");
const encoding_1 = require("../utils/encoding");
const submitExam = (req, res) => {
    console.log(req.body);
    let { studentId, answers } = req.body;
    console.log(answers);
    const score = answers.reduce((prev, current) => {
        if (current.correctAnswerIndex == current.answerIndex) {
            return prev + 1;
        }
        return prev;
    }, 0);
    res.json({ score });
    new Exam_1.Exam({
        student: encoding_1.decodeId(studentId).id,
        answers: answers.map((answer) => (Object.assign(Object.assign({}, answer), { questionId: encoding_1.decodeId(answer.questionId).id }))),
        score,
    }).save((err, object) => { });
};
exports.submitExam = submitExam;
//# sourceMappingURL=exam.js.map