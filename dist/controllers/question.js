"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuestion = exports.createQuestion = void 0;
const Question_1 = require("../models/Question");
const encoding_1 = require("../utils/encoding");
const createQuestion = (req, res) => {
    console.log(req.body);
    let { description, answers, correctAnswerIndex } = req.body;
    new Question_1.Question({
        description,
        answers,
        correctAnswerIndex,
    }).save((err, object) => {
        const question = object;
        res.json(question);
    });
};
exports.createQuestion = createQuestion;
const getQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let alreadyUsedIds;
    alreadyUsedIds = req.query.alreadyUsedIds || "[]";
    console.log("🚀 ~ file: question.ts ~ line 26 ~ getQuestion ~ alreadyUsedIds", alreadyUsedIds);
    alreadyUsedIds = JSON.parse(alreadyUsedIds).map((id) => encoding_1.decodeId(id).id);
    console.log("🚀 ~ file: question.ts ~ line 27 ~ getQuestion ~ alreadyUsedIds", alreadyUsedIds);
    let { description, answers } = req.body;
    const counter = yield Question_1.Question.count();
    // We can random also with Math.rand()*counter
    let random = Date.now() % (counter - 2);
    console.log(random, "🚀 ~ file: question.ts ~ line 40 ~ getQuestion ~ random");
    const question2 = yield Question_1.Question.aggregate([
        {
            $sample: { size: 1 },
        },
        {
            $match: { _id: { $nin: alreadyUsedIds } },
        },
    ]);
    console.log(question2);
    const question = yield Question_1.Question.findOne({
        _id: { $nin: alreadyUsedIds },
    }).skip(random);
    res.json(Object.assign({ id: encoding_1.encodeId("Question", (_a = question2[0]) === null || _a === void 0 ? void 0 : _a._id) }, question2[0]));
});
exports.getQuestion = getQuestion;
//# sourceMappingURL=question.js.map