import React from "react";

const AnimatedLine: React.FC = () => {
  return (
    <div className="relative flex justify-center my-6">
      <div
        className="h-1 bg-blue-500"
        style={{
          animation: "expand-contract 2s ease-in-out infinite",
          width: "50%",
        }}
      />
      <style>
        {`
          @keyframes expand-contract {
            0% { width: 50%; }
            50% { width: 100%; }
            100% { width: 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedLine;
