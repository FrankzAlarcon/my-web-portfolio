import React from 'react';

export default function Technologies() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center min-h-full gap-10 justify-center">
        <div className="bg-blue-800 h-[2px] w-20" />
        <h1 className="text-center text-4xl font-black text-gray-800">Technologies</h1>
        <div className="bg-blue-800 h-[2px] w-20" />
      </div>
      <div>
        <p className="text-gray-500 text-center font-semibold">Development tools I use </p>
      </div>
    </div>
  );
}
