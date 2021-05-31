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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const student_1 = __importDefault(require("./routes/student"));
const question_1 = __importDefault(require("./routes/question"));
const exam_1 = __importDefault(require("./routes/exam"));
const config_1 = require("./config");
const { MONGO_URI, PORT } = config_1.config;
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use("/api/student", student_1.default);
app.use("/api/question", question_1.default);
app.use("/api/exam", exam_1.default);
app.use(cors_1.default);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Connecting to database...");
    yield mongoose_1.default.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Database is connected !");
    yield app.listen(PORT);
    console.log(`Server started , listining on port  ${PORT}`);
});
app.use(express_1.default.static("public"));
app.get("*", (req, res) => {
    return res.sendFile(path_1.default.resolve(__dirname, "..", "public", "index.html"));
});
start();
//# sourceMappingURL=index.js.map