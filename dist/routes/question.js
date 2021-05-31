"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const question_1 = require("../controllers/question");
const router = express_1.Router();
router.post("/", question_1.createQuestion);
router.get("/", question_1.getQuestion);
exports.default = router;
//# sourceMappingURL=question.js.map