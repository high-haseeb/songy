
import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [smallDotPosition, setSmallDotPosition] = useState({ x: 0, y: 0 });
  const [bigDotPosition, setBigDotPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setSmallDotPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.body.style.cursor = 'none'; // Hide the original cursor
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.style.cursor = 'auto'; // Show the original cursor when the component is unmounted
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const delay = 50; // Adjust the delay in milliseconds
    const timeoutId = setTimeout(() => {
      setBigDotPosition({ x: smallDotPosition.x, y: smallDotPosition.y });
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [smallDotPosition]);

  return (
    <div>
      {/* Your content goes here */}
      <div className="small-dot" style={{ left: smallDotPosition.x, top: smallDotPosition.y }}></div>
      <div className="custom-cursor" style={{ left: bigDotPosition.x, top: bigDotPosition.y, transform: 'translate(-50%, -50%)' }}></div>
    </div>
  );
};

export default CustomCursor;
