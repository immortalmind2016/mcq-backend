export const encodeId = (type, id) => {
  let str = `${type}:${id}`;
  let encoded = Buffer.from(str).toString("base64");
  return encoded;
};

export const decodeId = (encodedId) => {
  let decodedStr = Buffer.from(encodedId, "base64").toString("utf8");
  console.log(
    "🚀 ~ file: encoding.ts ~ line 9 ~ decodeId ~ decodedStr",
    decodedStr
  );

  let [type, id] = decodedStr.split(":");
  return {
    type,
    id,
  };
};
