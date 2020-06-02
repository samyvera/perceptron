class Brain {
    constructor(dimension) {
        this.dimension = dimension;
        this.weights = new Array(this.dimension).fill(this.randomWeight());
        this.b = this.randomWeight();

        this.learning_rate = 0.2;
        this.epochs = 5000;
    }

    sigmoid = x => 1 / (1 + Math.exp(-x));

    randomWeight = () => Math.random() * 0.2 - 0.1;

    train = points => {
        for (let epoch = 0; epoch < this.epochs; epoch++) {
            const point = points[Math.floor(Math.random() * points.length)];
            const data = point.data;
            const solution = point.solution;

            let z = this.b;
            for (let i = 0; i < this.dimension; i++) z += this.weights[i] * data[i];

            const pred = this.sigmoid(z);
            const dpred = this.sigmoid(z) * (1 - this.sigmoid(z));
            const cost = (pred - solution) ** 2;
            const dcost = (pred - solution) * 2;

            for (let i = 0; i < this.dimension; i++) this.weights[i] -= this.learning_rate * dcost * dpred * data[i];
            this.b -= this.learning_rate * dcost * dpred * 1;
        }
    }

    solve = problem => {
        let solution = this.b;
        for (let i = 0; i < this.dimension; i++) solution += problem[i] * this.weights[i];
        return this.sigmoid(solution);
    }
}