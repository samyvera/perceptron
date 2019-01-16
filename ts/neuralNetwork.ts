class NeuralNetwork {

    public inputSize: number;
    public outputSize: number;

    public input: Array<number> = [];
    public output: Array<number> = [];

    public params: Array<number> = [];

    constructor(inputSize: number, outputSize: number) {
        this.inputSize = inputSize;
        this.outputSize = outputSize;

        for (let i = 0; i < this.inputSize; i++) {
            this.input[i] = 0;
        }
        for (let i = 0; i < this.outputSize; i++) {
            this.output[i] = 0;
        }
    }

    public train = (data: Array<Array<number>>): void => {
        let w: Array<number> = [];
        for (let i = 0; i < this.inputSize; i++) {
            w[i] = Math.random() * 0.2 - 0.1;
        }
        let b: number = Math.random() * 0.2 - 0.1;

        let learning_rate: number = 0.2;
        let learning_iteration: number = 50000;

        for (let i = 0; i < learning_iteration; i++) {
            let point: Array<number> = data[Math.floor(Math.random() * data.length)];
            let target: number = point[this.inputSize];

            let z: number = 0;
            for (let i = 0; i < this.inputSize; i++) {
                z += w[i] * point[i];
            }
            z += b;

            let pred: number = sigmoid(z);
            let dpred: number = sigmoid(z) * (1 - sigmoid(z));

            let cost: number = (pred - target) ** 2;
            let dcost: number = 2 * (pred - target);

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
    }

    public guess = (input: Array<number>): number => {
        let z: number = 0;

        for (let i = 0; i < input.length; i++) {
            z += input[i] * this.params[i];
        }
        z += this.params[input.length];

        return sigmoid(z);
    }
}