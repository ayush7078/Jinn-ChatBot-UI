import React, { useState } from "react";
import ChatBot from "./components/ChatBot";
import CustomizationPanel from "./components/CustomizationPanel";
import "./App.css";

const App = () => {
  const [customization, setCustomization] = useState({
    buttonIcon: "🤖",
    borderColor: "#000000",
    borderRadius: "15px",
    titleBgColor: "#000000",
    botBubbleColor: "#F0F0F0",
    botTextColor: "#000000",
    userBubbleColor: "#000000",
    userTextColor: "#FFFFFF",
    fontFamily: "Arial, sans-serif",
    userName: "Jinn Live",
    demoBot: "Demo Bot",
    chatIconfont: 30,
    buttonFontSize : 20,
  });
  
  const handleCustomizationChange = (name, value) => {
    setCustomization((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="app">
      <div className="left-panel">
        <CustomizationPanel
          customization={customization}
          onChange={handleCustomizationChange}
        />
      </div>
      <div className="right-panel">
        <ChatBot customization={customization} />
      </div>
    </div>
  );
};

export default App; 