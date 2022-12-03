let data = require("fs")
	.readFileSync("input.txt", { encoding: "utf-8" })
	.trim();

let lines = data.split(/\n/).map(Number);

const partitionByZero = (array) => {
	let chunkIndex = 0;

	const reducedArray = array.reduce((resultArray, item, index) => {
		if (!resultArray[chunkIndex]) {
			resultArray[chunkIndex] = [];
		}

		if (item !== 0) {
			resultArray[chunkIndex].push(item);
		} else {
			chunkIndex += 1;
		}

		return resultArray;
	}, []);

	return reducedArray.filter((item) => item.length);
};

module.exports = { data, lines, partitionByZero };
