import fs from "fs";

const data = fs.readFileSync("./src/2-1/data", "utf-8");
const lines = data.split(/\r?\n/);
let total = 0;
for (let i = 0; i < lines.length; i++) {
    const [rule, char, password] = lines[i].split(" ");
    const occurrence = password.split(char.substr(0, 1)).length - 1;
    if (Number.parseInt(rule.split("-")[0]) <= occurrence && occurrence <= Number.parseInt(rule.split("-")[1])) {
        total++;
    }
}
// eslint-disable-next-line no-console
console.log(total);