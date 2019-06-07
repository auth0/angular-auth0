const fs = require("fs");
const pkg = require("./package.json");
const newVersion = pkg.version;
fs.writeFileSync("./src/version.js", `export default '${newVersion}';`);
