"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const exam_1 = require("../controllers/exam");
const router = express_1.Router();
router.post("/", exam_1.submitExam);
exports.default = router;
//# sourceMappingURL=exam.js.map