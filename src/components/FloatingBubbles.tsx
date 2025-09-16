import React from 'react';

const FloatingBubbles = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="floating-bubble"></div>
      <div className="floating-bubble"></div>
      <div className="floating-bubble"></div>
      <div className="floating-bubble"></div>
    </div>
  );
};

export default FloatingBubbles;