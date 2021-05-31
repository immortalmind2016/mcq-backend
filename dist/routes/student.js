"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_1 = require("../controllers/student");
const router = express_1.Router();
router.post("/", student_1.createStudent);
exports.default = router;
//# sourceMappingURL=student.js.map