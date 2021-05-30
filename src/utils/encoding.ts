export const encodeId = (type, id) => {
  let str = `${type}:${id}`;
  let encoded = Buffer.from(str).toString("base64");
  return encoded;
};

export const decoded = (encodedId) => {
  let decodedStr = Buffer.from(encodedId).toString("utf-8");
  let [type, id] = decodedStr.split(":");
  return {
    type,
    id,
  };
};
