const { off } = require("process");
const { data, lines, partitionByZero } = require("../utils/input");

const points = {
	A: 1,
	B: 2,
	C: 3,
	X: 1,
	Y: 2,
	Z: 3,
};

const whoWin = (a, b) => {
	if (a === "A") {
		if (b === "Y") return 1;
	}

	if (a === "B") {
		if (b === "Z") return 1;
	}

	if (a === "C") {
		if (b === "X") return 1;
	}

	if (points[a] === points[b]) return 0;

	return -1;
};

const calculatePoints = (a, b) => {
	const winner = whoWin(a, b);

	if (!winner) return points[b] + 3;

	if (winner === 1) return points[b] + 6;

	return points[b];
};

const input1 = data.split("\n").map((play) => {
	const sub = play.split(" ");

	return {
		elve: sub[0],
		me: sub[1],
		total: calculatePoints(sub[0], sub[1]),
	};
});

const solution1 = input1.reduce((acc, item) => acc + item.total, 0);

console.log("SOLUTION 1: ", solution1);

const winnerOptions = {
	A: "Y",
	B: "Z",
	C: "X",
};

const looserOptions = {
	A: "Z",
	B: "X",
	C: "Y",
};

const drawOptions = {
	A: "X",
	B: "Y",
	C: "Z",
};

const myOption = (elveOption, order) => {
	if (order === "X") {
		return looserOptions[elveOption];
	}

	if (order === "Y") {
		return drawOptions[elveOption];
	}

	if (order === "Z") {
		return winnerOptions[elveOption];
	}
};

const input2 = data.split("\n").map((play) => {
	const sub = play.split(" ");

	const me = myOption(sub[0], sub[1]);

	return {
		elve: sub[0],
		me,
		total: calculatePoints(sub[0], me),
	};
});

const solution2 = input2.reduce((acc, item) => acc + item.total, 0);

console.log("SOLUTION 2: ", solution2);
