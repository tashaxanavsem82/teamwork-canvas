const canvasContainer = document.getElementById('canvas-container');

// Initialize the canvas
const initCanvas = () => {
    const canvas = document.createElement('canvas');
    canvas.width = canvasContainer.clientWidth;
    canvas.height = canvasContainer.clientHeight;
    canvasContainer.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // Basic drawing settings
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};

initCanvas();
