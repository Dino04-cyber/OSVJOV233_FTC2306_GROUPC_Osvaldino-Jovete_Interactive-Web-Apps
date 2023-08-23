// // scripts.js

// const data = {
// 	lists: [
// 		['first', [15, 11, 13, 7, 5]],
// 		['second', [2, 6, 8, 4, 14, 12, 10]],
// 		['third', [9, 3, 1]],
// 	]
// }

// // Only edit below

// const { first = 1 } = data.first || {}
// const { second = 1 } = data.second || {}
// const { third = 1 } = data.third || {}

// const result = []

// const extractBiggest = () => {
// 	if (first[0] > second[1]) {
// 		return first
// 	}

// 	if (third[0] < 0) {
// 		return second
// 	}
	
// 	return third

// }

// // Only edit above

// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())

// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())

// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())

// console.log(result)


// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const [firstLabel, firstArray] = data.lists[0];
const [secondLabel, secondArray] = data.lists[1];
const [thirdLabel, thirdArray] = data.lists[2];

const result = [];

const extractBiggest = () => {
	const firstLastValue = firstArray[firstArray.length - 1];
	const secondLastValue = secondArray[secondArray.length - 1];
	const thirdLastValue = thirdArray[thirdArray.length - 1];

	if (firstLastValue >= secondLastValue && firstLastValue >= thirdLastValue) {
		firstArray.pop();
		return firstLastValue;
	}

	if (secondLastValue >= firstLastValue && secondLastValue >= thirdLastValue) {
		secondArray.pop();
		return secondLastValue;
	}
	
	if (thirdLastValue >= firstLastValue && thirdLastValue >= secondLastValue) {
		thirdArray.pop();
		return thirdLastValue;
	}
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result);
