import fs from "fs";

const data = fs.readFileSync("./src/4-1/data", "utf-8");
const lines = data.split(/\r\n\r\n/g);
let total = 0;
const properties = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
lines.forEach((x) => {
    const passport = x.replace(/\r\n/g, " ").split(" ").reduce((prev, curr) => {
        if(!prev){
            prev = {};
        }
        const [key, val] = curr.split(":");
        return { ...prev, [key]: val };
    }, {} as { [key: string]: string });
    let valid = true;
    properties.forEach((p) => {
        if (!passport[p]) {
            valid = false;
        }
    });
    if (valid) {
        total++;
    }
});

// eslint-disable-next-line no-console
console.log(total);