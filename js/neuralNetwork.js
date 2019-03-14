class NeuralNetwork {
    constructor(inputSize) {
        this.input = [];
        this.params = [];
        this.train = (data) => {
            let w = [];
            for (let i = 0; i < this.inputSize; i++) {
                w[i] = Math.random() * 0.2 - 0.1;
            }
            let b = Math.random() * 0.2 - 0.1;
            let learning_rate = 0.2;
            let learning_iteration = 50000;
            for (let i = 0; i < learning_iteration; i++) {
                let point = data[Math.floor(Math.random() * data.length)];
                let target = point[this.inputSize];
                let z = 0;
                for (let i = 0; i < this.inputSize; i++) {
                    z += w[i] * point[i];
                }
                z += b;
                let pred = sigmoid(z);
                let dpred = sigmoid(z) * (1 - sigmoid(z));
                let cost = Math.pow((pred - target), 2);
                let dcost = 2 * (pred - target);
                for (let i = 0; i < this.inputSize; i++) {
                    w[i] -= learning_rate * dcost * dpred * point[i];
                }
                b -= learning_rate * dcost * dpred * 1;
            }
            this.params = [];
            for (let i = 0; i < this.inputSize; i++) {
                this.params[i] = w[i];
            }
            this.params.push(b);
        };
        this.guess = (input) => {
            let z = 0;
            for (let i = 0; i < input.length; i++) {
                z += input[i] * this.params[i];
            }
            z += this.params[input.length];
            return sigmoid(z);
        };
        this.inputSize = inputSize;
        for (let i = 0; i < this.inputSize; i++) {
            this.input[i] = 0;
        }
    }
}
