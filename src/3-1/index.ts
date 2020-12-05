import fs from "fs";

const data = fs.readFileSync("./src/3-1/data", "utf-8");
const matrix = data.split(/\r?\n/).map((x) => x.split(""));
let total = 0;
const right = 3;
const down = 1;
for (let i = 0; i < matrix.length - 1; i++) {
    const rightTotal = right * (i + 1);
    if (matrix[i + down][rightTotal % matrix[i].length] === "#") {
        total++;
    }

}

// eslint-disable-next-line no-console
console.log(total);