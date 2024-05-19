import React, { useEffect, useRef } from 'react';

const Hangman = ({ wrongGuesses }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawGallows(context);
    drawHangman(context, wrongGuesses);
  }, [wrongGuesses]);

  const drawGallows = (context) => {
    context.strokeStyle = '#000';
    context.lineWidth = 2;

    // Base
    context.beginPath();
    context.moveTo(10, 130);
    context.lineTo(130, 130);
    context.stroke();

    // Left Pole
    context.beginPath();
    context.moveTo(30, 130);
    context.lineTo(30, 10);
    context.stroke();

    // Top Beam
    context.beginPath();
    context.moveTo(30, 10);
    context.lineTo(90, 10);
    context.stroke();

    // Rope
    context.beginPath();
    context.moveTo(90, 10);
    context.lineTo(90, 30);
    context.stroke();
  };

  const drawHangman = (context, wrongGuesses) => {
    context.strokeStyle = '#000';
    context.lineWidth = 2;

    if (wrongGuesses > 0) {
      // Head
      context.beginPath();
      context.arc(90, 40, 10, 0, Math.PI * 2, true);
      context.stroke();
    }
    if (wrongGuesses > 1) {
      // Body
      context.beginPath();
      context.moveTo(90, 50);
      context.lineTo(90, 90);
      context.stroke();
    }
    if (wrongGuesses > 2) {
      // Left Arm
      context.beginPath();
      context.moveTo(90, 60);
      context.lineTo(70, 80);
      context.stroke();
    }
    if (wrongGuesses > 3) {
      // Right Arm
      context.beginPath();
      context.moveTo(90, 60);
      context.lineTo(110, 80);
      context.stroke();
    }
    if (wrongGuesses > 4) {
      // Left Leg
      context.beginPath();
      context.moveTo(90, 90);
      context.lineTo(70, 110);
      context.stroke();
    }
    if (wrongGuesses > 5) {
      // Right Leg
      context.beginPath();
      context.moveTo(90, 90);
      context.lineTo(110, 110);
      context.stroke();
    }
  };

  return (
    <div>
      <canvas ref={canvasRef} width="150" height="150" />
    </div>
  );
};

export default Hangman;
