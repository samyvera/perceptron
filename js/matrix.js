class Matrix {
    constructor(rows, cols) {
        this.grid = [];
        this.randomize = () => {
            let grid = this.grid;
            for (let x = 0; x < this.rows; x++) {
                for (let y = 0; y < this.cols; y++) {
                    grid[x][y] = Math.floor(Math.random() * 10);
                }
            }
            return grid;
        };
        this.plus = (other) => {
            let grid = this.grid;
            if (other instanceof Matrix) {
                for (let x = 0; x < this.rows; x++) {
                    for (let y = 0; y < this.cols; y++) {
                        grid[x][y] += other.grid[x][y];
                    }
                }
            }
            else {
                for (let x = 0; x < this.rows; x++) {
                    for (let y = 0; y < this.cols; y++) {
                        grid[x][y] += other;
                    }
                }
            }
            return grid;
        };
        this.times = (factor) => {
            let grid = this.grid;
            for (let x = 0; x < this.rows; x++) {
                for (let y = 0; y < this.cols; y++) {
                    grid[x][y] *= factor;
                }
            }
            return grid;
        };
        this.map = (func) => {
            let grid = this.grid;
            for (let x = 0; x < this.rows; x++) {
                for (let y = 0; y < this.cols; y++) {
                    let value = grid[x][y];
                    grid[x][y] = func(value);
                }
            }
            return grid;
        };
        this.transpose = () => {
            let matrix = new Matrix(this.cols, this.rows);
            for (let x = 0; x < matrix.rows; x++) {
                for (let y = 0; y < matrix.cols; y++) {
                    matrix.grid[x][y] = this.grid[y][x];
                }
            }
            return matrix;
        };
        this.print = () => {
            console.table(this.grid);
        };
        this.rows = rows;
        this.cols = cols;
        for (let i = 0; i < this.rows; i++) {
            this.grid[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.grid[i][j] = 0;
            }
        }
    }
}
Matrix.multiply = (m1, m2) => {
    if (m1.cols !== m2.rows) {
        console.log("ERROR");
    }
    else {
        let matrix = new Matrix(m1.rows, m2.cols);
        for (let x = 0; x < matrix.rows; x++) {
            for (let y = 0; y < matrix.cols; y++) {
                let sum = 0;
                for (let i = 0; i < m1.cols; i++) {
                    sum += m1.grid[x][i] * m2.grid[i][y];
                }
                matrix.grid[x][y] = sum;
            }
        }
        return matrix;
    }
};
