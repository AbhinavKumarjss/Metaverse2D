import React, { useEffect, useRef } from 'react';
import drawGrid from '../grid/grid';

export default function Screen() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image(); // Create an image element
    image.src = '/Assets/Map.png'; // Set the source of the image

    image.onload = () => {
      // Set canvas dimensions to the image's dimensions
      canvas.width = 2*image.width;
      canvas.height = 2*image.height;

      // Draw the image at its full size
      ctx.drawImage(image, 0, 0, 2*image.width, 2*image.height);
      drawGrid(ctx,canvas);
    };

  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block', // Remove unnecessary scrollbars
        maxWidth: '100%', // Ensure it scales well on smaller screens
      }}
    />
  );
}
