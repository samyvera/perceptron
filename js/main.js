window.onload = () => {
    const length = 3;
    const data = [
        { problem: [0, 0, 0], solution: 0 },
        { problem: [0, 0, 1], solution: 0 },
        { problem: [0, 1, 0], solution: 0 },
        { problem: [1, 0, 0], solution: 0 },
        { problem: [0, 1, 1], solution: 1 },
        { problem: [1, 0, 1], solution: 1 },
        { problem: [1, 1, 0], solution: 1 },
        { problem: [1, 1, 1], solution: 1 }
    ];
    
    const perceptron = new Perceptron(length);
    perceptron.train(data, 0.2, 1e-8);
    
    // vvv DISPLAY vvv

    const canvas = document.getElementById("canvas");
    canvas.width = 600;
    canvas.height = 400;
    const cx = canvas.getContext("2d");
    cx.scale(400, 400);
    
    const draw = (problem, solution) => {
        cx.fillStyle = "hsl(" + (240 + solution * 120) + ", 100%, 50%)";
        cx.lineWidth = 0.01;
        cx.beginPath();
        cx.arc(
            0.75 + problem[0] / 2 - problem[1] / 2,
            0.125 + problem[2] / 2 + problem[0] / 8 + problem[1] / 8,
            0.05 * (0.5 + (problem[0] / 4 + problem[1] / 4)), 0, 2 * Math.PI
        );
        cx.fill();
        cx.stroke();
    }
    
    setInterval(() => {
        const x = document.getElementById("x").value;
        const y = document.getElementById("y").value;
        const z = document.getElementById("z").value;
    
        const problem = [x, y, z];
        const prediction = Math.round(perceptron.predict(problem) * 100) / 100;

        cx.clearRect(0, 0, 100, 100);
        data.forEach(elem => draw(elem.problem, elem.solution));
        draw(problem, prediction);

        document.getElementById("result").innerHTML = "Prediction : " + (Math.round(prediction * 100)) + "%";
    }, 1000);
}