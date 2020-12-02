import fs from "fs";

const data = fs.readFileSync("./src/1-1/data", "utf-8");
const lines = data.split(/\r?\n/);

for (let i = 0; i < lines.length; i++) {

    for (let j = i; j < lines.length; j++) {
        if ((Number.parseInt(lines[i]) + Number.parseInt(lines[j])) === 2020) {
            // eslint-disable-next-line no-console
            console.log(lines[i], lines[j], Number.parseInt(lines[i]) * Number.parseInt(lines[j]));
        }

    }

}
