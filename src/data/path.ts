const path = require("path");

// 不能使用 process.env.PUBLIC
export const tags_path = path.join(
  process.env["PUBLIC"],
  "demo",
  "tags.json"
);
export const collection_path = path.join(process.env["PUBLIC"], "demo");
