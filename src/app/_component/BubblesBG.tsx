import { useEffect, useMemo, useState } from "react";
import "./Bubbles.scss";

const BubblesComponent: React.FC = () => {
  const colors = useMemo(
    () => [
      "#FF5733",
      "#C385D0",
      // "#33FF57",
      "#5733FF",
      // "#FFFF33",
      "#33FFFF",
      "#33FF57",
      "#FF33FF",
      "#FF5733",
      "#4C0253",
      "#5733FF",
      "#7C4B87",
      // "#FFFF33",
    ],
    []
  );

  const [bubbles, setBubbles] = useState<any>([]);

  useEffect(() => {
    const numBubbles = 20;
    const newBubbles = [];

    for (let i = 0; i < numBubbles; i++) {
      const bubble = {
        id: i,
        size: Math.random() * 30 + 40, // Random size between 10 and 40
        color: colors[Math.floor(Math.random() * colors.length)], // Random color from the array
        speed: Math.random() * 4 + 1, // Random speed between 1 and 5
        x: Math.random() * window.innerWidth, // Random horizontal position
        y: Math.random() * window.innerHeight, // Random vertical position
      };

      newBubbles.push(bubble);
    }

    setBubbles(newBubbles);

    const updateBubbles = () => {
      setBubbles((prevBubbles: any) => {
        return prevBubbles.map((bubble: any) => {
          const newX = bubble.x + bubble.speed;
          const newY = bubble.y - bubble.speed; // Adjust direction as needed

          return {
            ...bubble,
            x: newX > window.innerWidth ? -50 : newX, // Reset position if bubble goes out of bounds
            y: newY < 0 ? window.innerHeight + 50 : newY,
          };
        });
      });
    };

    const animationId = setInterval(updateBubbles, 100); // Update bubbles every 100 milliseconds

    return () => clearInterval(animationId);
  }, [colors]);

  return (
    <div className="bubbles-container">
      {bubbles.map((bubble: any) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: bubble.size,
            height: bubble.size,
            backgroundColor: bubble.color,
            opacity: 0.3,
            top: bubble.y,
            left: bubble.x,
          }}
        />
      ))}
    </div>
  );
};

export default BubblesComponent;
