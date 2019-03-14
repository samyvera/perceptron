var drawNetwork = (cx, inputs, output, weights) => {
    cx.font = "16px rcr";
    let arr1 = [48, 32, 16];
    for (let i = 0; i < inputs.length; i++) {
        let width = Math.floor(inputs[i] * weights[i]);
        if (width === 0) {
            cx.strokeStyle = 'grey';
        }
        else if (width > 0) {
            cx.strokeStyle = 'green';
        }
        else {
            width = Math.abs(width);
            cx.strokeStyle = 'red';
        }
        cx.lineWidth = Math.floor(Math.abs(inputs[i] * weights[i]) / 9 + 1);
        cx.beginPath();
        cx.moveTo(28, 32 * i + arr1[inputs.length - 1] + 12);
        cx.lineTo(146, 60);
        cx.stroke();
        cx.fillStyle = "#8080ff";
        cx.fillRect(16, 32 * i + arr1[inputs.length - 1], 24, 24);
        cx.fillStyle = "white";
        cx.fillText("0" + inputs[i], 22, 32 * i + arr1[inputs.length - 1] + 16);
    }
    cx.fillStyle = "#8080ff";
    cx.fillRect(128, 44, 32, 32);
    let txt = output * 100 + "%";
    cx.fillStyle = "white";
    cx.fillText(txt, 132, 64);
};
var drawData = (cx, data) => {
    for (let x = 0; x < data.length; x++) {
        for (let y = 0; y < data[x].length; y++) {
            cx.fillStyle = "white";
            let nb = "0" + data[x][y];
            while (nb.length < 10) {
                nb += " ";
            }
            cx.fillText(nb, 32 * (y + 1), 128 + 10 * (x + 1));
        }
    }
};
window.onload = () => {
    let canvas = document.createElement('canvas');
    let cx = canvas.getContext("2d", { alpha: false });
    canvas.width = 512;
    canvas.height = 512;
    document.body.appendChild(canvas);
    cx.scale(2, 2);
    cx.imageSmoothingEnabled = false;
    drawNetwork(cx, problem, result, brain.params);
    drawData(cx, selectedData);
};
