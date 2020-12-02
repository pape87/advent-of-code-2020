import fs from "fs";

const data = fs.readFileSync("./src/1-2/data", "utf-8");
const lines = data.split(/\r?\n/);

for (let i = 0; i < lines.length; i++) {


    for (let j = i; j < lines.length; j++) {
        for (let k = j; k < lines.length; k++) {
            if ((Number.parseInt(lines[i]) + Number.parseInt(lines[j]) + Number.parseInt(lines[k])) === 2020) {
                // eslint-disable-next-line no-console
                console.log(lines[i], lines[j], lines[k], Number.parseInt(lines[i]) * Number.parseInt(lines[j]) * Number.parseInt(lines[k]));
            }

        }
    }

}
