// Copies the Excel library next to index.html so the app also works offline.
const fs = require("fs");
fs.copyFileSync("node_modules/xlsx/dist/xlsx.full.min.js", "www/xlsx.full.min.js");
console.log("xlsx copied to www/");
