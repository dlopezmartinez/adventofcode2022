let data = require("fs")
	.readFileSync("input.txt", { encoding: "utf-8" })
	.trim();

let lines = data.split(/\n/).map(Number);

module.exports = { data, lines };
