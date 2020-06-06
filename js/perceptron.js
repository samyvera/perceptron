class Perceptron {
    constructor(length) {
        this.weights = new Array(length).fill(this.randomWeight());
        this.bias = this.randomWeight();
    }
    sigmoid = x => 1 / (1 + Math.exp(-x));
    randomWeight = () => Math.random() * 2 - 1;
    predict = problem => this.sigmoid(this.bias + this.weights.map((weight, i) => weight * problem[i]).reduce((a, b) => a + b, 0));
    train = (data, learningRate, threshold) => {
        let correction = threshold;
        while (Math.abs(correction) >= Math.abs(threshold)) {
            const {problem, solution} = data[Math.floor(Math.random() * data.length)];
            const prediction = this.predict(problem);
            correction = learningRate * (prediction - solution) * 2 * prediction * (1 - prediction);
            this.weights = this.weights.map((weight, i) => weight - correction * problem[i]);
            this.bias -= correction;
        }
    }
}