"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const envalid_1 = require("envalid");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = envalid_1.cleanEnv(process.env, {
    PORT: envalid_1.port({ default: 5000 }),
    MONGO_URI: envalid_1.str(),
});
//# sourceMappingURL=config.js.map