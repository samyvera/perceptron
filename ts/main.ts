var sigmoid = (x: number): number => {
    return 1 / (1 + Math.exp(-x));
}

var lineData: Array<Array<number>> = [
    [0.5, 0],
    [1, 0],
    [2, 0],
    [3, 1],
    [3.5, 1],
    [5, 1]
];

var planData: Array<Array<number>> = [
    [1, 5, 0],
    [2, 3, 0],
    [2, 4.5, 0],
    [3, 2.5, 0],
    [3, 1.5, 1],
    [3.5, 2.5, 1],
    [4, 1.5, 1],
    [5.5, 0, 1]
];

var spaceData: Array<Array<number>> = [
    [1, 0.5, 3, 0],
    [0.5, 0, 5, 0],
    [1, 1.5, 4.5, 0],
    [1.5, 1, 3.5, 0],
    [0, 2, 2.5, 0],
    [2, 2, 3, 0],
    [3, 3, 2, 0],
    [4, 3, 1.5, 1],
    [3, 4.5, 0, 1],
    [3.5, 5, 2, 1]
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

var brain = new NeuralNetwork(problemSize);
brain.train(selectedData);

var result = Math.round(brain.guess(problem) * 100) / 100;