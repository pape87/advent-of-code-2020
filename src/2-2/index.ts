import fs from "fs";

const data = fs.readFileSync("./src/2-2/data", "utf-8");
const lines = data.split(/\r?\n/);
let total = 0;
for (let i = 0; i < lines.length; i++) {
    const [rule, char, password] = lines[i].split(" ");
    const letter = char.substr(0, 1);
    const first = password.substr(Number.parseInt(rule.split("-")[0]) - 1, 1);
    const second = password.substr(Number.parseInt(rule.split("-")[1]) - 1, 1);
    if (first !== second && (first === letter || second === letter)) {
        total++;
    }
}
// eslint-disable-next-line no-console
console.log(total);