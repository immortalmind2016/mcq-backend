import { encodeId } from "./encoding";

export const schemaJsonTransform = (ObjectName) => {
  return {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
        ret.id = encodeId(ObjectName, ret._id);
        delete ret._id;
      },
    },
  };
};
