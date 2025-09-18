import React from 'react';

const FloatingBubbles = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 15 }, (_, i) => (
        <div
          key={i}
          className="floating-bubble"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default FloatingBubbles;