class Matrix {
    public rows: number;
    public cols: number;
    public grid: Array<Array<number>> = [];

    constructor(rows: number, cols: number) {
        this.rows = rows;
        this.cols = cols;

        for (let i = 0; i < this.rows; i++) {
            this.grid[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.grid[i][j] = 0;
            }
        }
    }

    public randomize = (): Array<Array<number>> => {
        let grid: Array<Array<number>> = this.grid;
        for (let x = 0; x < this.rows; x++) {
            for (let y = 0; y < this.cols; y++) {
                grid[x][y] = Math.floor(Math.random() * 10);
            }
        }
        return grid;
    }

    public plus = (other: any): Array<Array<number>> => {
        let grid: Array<Array<number>> = this.grid;

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
    }

    public static multiply = (m1: Matrix, m2: Matrix): Matrix => {
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
    }

    public times = (factor: number): Array<Array<number>> => {
        let grid: Array<Array<number>> = this.grid;
        for (let x = 0; x < this.rows; x++) {
            for (let y = 0; y < this.cols; y++) {
                grid[x][y] *= factor;
            }
        }
        return grid;
    }

    public map = (func: Function): Array<Array<number>> => {
        let grid: Array<Array<number>> = this.grid;
        for (let x = 0; x < this.rows; x++) {
            for (let y = 0; y < this.cols; y++) {
                let value = grid[x][y];
                grid[x][y] = func(value);
            }
        }
        return grid;
    }

    public transpose = (): Matrix => {
        let matrix = new Matrix(this.cols, this.rows);
        for (let x = 0; x < matrix.rows; x++) {
            for (let y = 0; y < matrix.cols; y++) {
                matrix.grid[x][y] = this.grid[y][x];
            }
        }
        return matrix;
    }

    public print = (): void => {
        console.table(this.grid);
    }
}