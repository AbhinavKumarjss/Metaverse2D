const drawGrid = (ctx,canvas) => {
    const gridSize = 50; // Size of grid cells
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent black
    ctx.lineWidth = 0.5; // Thin lines

    // Draw vertical lines
    for (let x = 0; x <= canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    // Draw horizontal lines
    for (let y = 0; y <= canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    
  };
export default drawGrid;