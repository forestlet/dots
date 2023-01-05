const path = require("path");

// 或者试试 process.cwd()
export const root = path.resolve("./");
export const tags_path = path.join(root, "src", "template", "tags.json");
export const notes_path = path.join(root, "src", "template", "notes");
