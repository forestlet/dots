const path = require("path");

// 不能使用 process.env.PUBLIC
export const tags_path = path.join(
  process.env["PUBLIC"],
  "template",
  "tags.json"
);
export const notes_path = path.join(process.env["PUBLIC"], "template", "notes");
