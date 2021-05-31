"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaJsonTransform = void 0;
const encoding_1 = require("./encoding");
const schemaJsonTransform = (ObjectName) => {
    return {
        toJSON: {
            transform(doc, ret) {
                delete ret.__v;
                ret.id = encoding_1.encodeId(ObjectName, ret._id);
                delete ret._id;
            },
        },
    };
};
exports.schemaJsonTransform = schemaJsonTransform;
//# sourceMappingURL=schemaJsonTransform.js.map