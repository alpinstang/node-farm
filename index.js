const fs = require("fs");

// synchronous file read/write
// const output = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(output);

// const textOutput = `This is what we know about the avocado: ${output}.\nCreated on ${Date.now()}`;

// fs.writeFileSync("./txt/output.txt", textOutput);

// callback hell formation
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
      console.log(data3);

      fs.writeFile(
        "./txt/final.txt",
        `Data 2: ${data2}\nData 3: ${data3}`,
        "utf-8",
        (err) => {
          console.log("your file has been written!");
        }
      );
    });
  });
});

console.log("Will read file!");
