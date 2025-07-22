
"use client";

import React from "react";

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none perspective-[1000px] z-0">
      {/* Floating Cube */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-purple-400/30 to-pink-400/30 backdrop-blur-sm border border-purple-300/40 rounded-lg animate-float3d-slow transform-gpu" />

      {/* Floating Circle */}
      <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 backdrop-blur-sm border border-blue-300/40 rounded-full animate-float3d-medium transform-gpu" />

      {/* Floating Triangle */}
      <div className="absolute bottom-40 left-20 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-emerald-400/40 animate-float3d-fast transform-gpu" />

      {/* Floating Hexagon */}
      <div
        className="absolute top-60 left-1/2 w-12 h-12 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 backdrop-blur-sm border border-yellow-300/40 animate-float3d-slow transform-gpu"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      />

      {/* Floating Diamond */}
      <div className="absolute bottom-20 right-10 w-14 h-14 bg-gradient-to-br from-rose-400/30 to-red-400/30 backdrop-blur-sm border border-rose-300/40 rotate-45 animate-float3d-medium transform-gpu" />

      {/* Large Background Circle */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full animate-pulse-slow transform-gpu" />

      {/* Large Background Square */}
      <div className="absolute -bottom-20 -left-20 w-36 h-36 bg-gradient-to-br from-teal-400/10 to-green-400/10 rounded-lg rotate-12 animate-pulse-slow transform-gpu" />
    </div>
  );
};

export default FloatingShapes;
