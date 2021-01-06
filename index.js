const fs = require("fs");

const output = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(output);

const textOutput = `This is what we know about the avocado: ${output}.\nCreated on ${Date.now()}`;

fs.writeFileSync("./txt/output.txt", textOutput);
