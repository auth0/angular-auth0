const fs = require("fs");
const pkg = require("./package.json");
const bower = require("./bower.json");
const newVersion = process.argv[2];
if (!newVersion) {
  throw new Error("usage: `release new_version`");
}
fs.writeFileSync(
  "./bower.json",
  JSON.stringify({ ...bower, version: newVersion }, null, 2)
);
fs.writeFileSync(
  "./package.json",
  JSON.stringify({ ...pkg, version: newVersion }, null, 2)
);
fs.writeFileSync("./src/version.js", `export default '${newVersion}';`);
