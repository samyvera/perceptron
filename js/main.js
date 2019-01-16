var sigmoid = (x) => {
    return 1 / (1 + Math.exp(-x));
};
var lineData = [
    [1, 0],
    [2, 0],
    [0.5, 0],
    [3, 1],
    [3.5, 1],
    [5, 1]
];
var planData = [
    [1, 1, 0],
    [2, 1, 0],
    [2, 0.5, 0],
    [3, 1, 0],
    [3, 1.5, 1],
    [3.5, 0.5, 1],
    [4, 1.5, 1],
    [5.5, 1, 1]
];
var spaceData = [
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
var problem = [3, 2];
var brain = new NeuralNetwork(2, 1);
brain.train(planData);
var result = brain.guess(problem);
console.log("Data :");
console.table(planData);
console.log("");
console.log("Problem :");
console.table(problem);
console.log("");
console.log("Solution :");
console.log(Math.round(result * 100) / 100);
