import React from "react";

const GNB = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-start">
        <div className="gnb-logo">
          <h1 className="text-2xl font-bold text-gray-800 cursor-pointer transition-colors duration-200 hover:text-blue-600">
            DevScoop
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default GNB;
