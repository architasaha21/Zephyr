import React from "react";
import mainBg from "./assets/main1.png";

function App() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      <h1 className="text-white text-4xl font-bold p-8">Hello Zephyr 🌌</h1>
    </div>
  );
}

export default App;
