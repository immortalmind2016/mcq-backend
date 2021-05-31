"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudent = void 0;
const Student_1 = require("../models/Student");
const encoding_1 = require("../utils/encoding");
const createStudent = (req, res) => {
    console.log(req.body);
    let { name } = req.body;
    new Student_1.Student({
        name,
    }).save((err, object) => {
        const student = object;
        res.json({ id: encoding_1.encodeId("Student", student.id), name });
    });
};
exports.createStudent = createStudent;
//# sourceMappingURL=student.js.map