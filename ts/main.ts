var sigmoid = (x: number): number => {
    return 1 / (1 + Math.exp(-x));
}

var lineData: Array<Array<number>> = [
    [1, 0],
    [2, 0],
    [0.5, 0],
    [3, 1],
    [3.5, 1],
    [5, 1]
];

var planData: Array<Array<number>> = [
    [1, 1, 0],
    [2, 1, 0],
    [2, 0.5, 0],
    [3, 1, 0],
    [3, 1.5, 1],
    [3.5, 0.5, 1],
    [4, 1.5, 1],
    [5.5, 1, 1]
];

var spaceData: Array<Array<number>> = [
    [1, 1, 1, 0],
    [0.5, 2, 1, 0],
    [1, 2, 0.5, 0],
    [1.5, 2, 3.5, 0],
    [0, 3, 1, 0],
    [2, 4, 1.5, 0],
    [1.5, 5.5, 1, 0],
    [4, 3, 1.5, 1],
    [3, 3.5, 0.5, 1],
    [2, 2, 2, 1]
];

var problemSize: number = Math.floor(Math.random() * 3) + 1;
var problem: Array<number> = [];
for (let i = 0; i < problemSize; i++) {
    problem.push(Math.floor(Math.random() * 6))
}

var selectedData: Array<Array<number>>
if (problemSize === 1) {
    selectedData = lineData;
}
else if (problemSize === 2) {
    selectedData = planData;
}
else if (problemSize === 3) {
    selectedData = spaceData;
}

var brain = new NeuralNetwork(problemSize, 1);
brain.train(selectedData);

var result = brain.guess(problem);

console.log("Data :");
console.table(selectedData);
console.log("");
console.log("Problem :");
console.table(problem);
console.log("");
console.log("Solution :");
console.log(Math.round(result * 100) / 100);