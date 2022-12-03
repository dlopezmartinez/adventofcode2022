const { data, lines, partitionByZero } = require("../utils/input");

const partitionedData = partitionByZero(lines);

const elves = partitionedData.map((data, index) => {
	const elve = {
		id: index,
		calories: data.reduce((acc, value) => acc + value),
		items: data.length,
	};

	return elve;
});

const solution1 = Math.max(...elves.map((elve) => elve.calories));

const solution2 = [...elves.map((elve) => elve.calories)]
	.sort((a, b) => a - b)
	.slice(-3)
	.reduce((acc, value) => acc + value);

console.log("SOLUTION 1: ", solution1);

console.log("SOLUTION 2: ", solution2);
