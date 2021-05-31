"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schemaJsonTransform_1 = require("../utils/schemaJsonTransform");
const StudentSchema = new mongoose_1.default.Schema({
    name: String,
}, Object.assign({}, schemaJsonTransform_1.schemaJsonTransform("Question")));
exports.Student = mongoose_1.default.model("Student", StudentSchema);
//# sourceMappingURL=Student.js.map