import React from "react";
import "../App.css";

const ChatBot = ({ customization }) => {
  const {
    buttonIcon,
    borderColor,
    borderRadius,
    titleBgColor,
    botBubbleColor,
    botTextColor,
    userBubbleColor,
    userTextColor,
    fontFamily,
    userName,
    demoBot,
    chatIconfont,
    buttonFontSize
  } = customization;

  return (
    <div
      className="chatbot"
      style={{
        borderColor,
        borderRadius,
        fontFamily,
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Chatbot Header */}
      <div
        className="chatbot-title"
        style={{ backgroundColor: titleBgColor, color: "#FFFFFF" }}
      >
        <div className="chatbot-header-left">
          <span className="chat-icon"  style={{
              fontSize: `${chatIconfont || 30}px`,
              display: "inline-block",
            }} >{buttonIcon}</span>
          <div className="header-text">
            <span className="user-name">{userName}</span>
            <span className="demo-bot">{demoBot}</span>
          </div>
        </div>
        <span className="close-icon" >✖</span>
      </div>

      {/* Chat Area */}
      <div className="chat-area">
        <div
          className="user-bubble"
          style={{ backgroundColor: userBubbleColor, color: userTextColor }}
        >
            
          Hello Jinn!
        </div>
         <div className="bot-bubble-div">
        <span className="chat-icon-1">{buttonIcon}</span>
        <span
          className="bot-bubble"
          style={{ backgroundColor: botBubbleColor, color: botTextColor }}
        >
          Hello Anurag! How can I help you today?
        </span>
        </div>
      </div>

      {/* Input Area */}
      <div className="input-area">
        <input
          className="chat-input"
          type="text"
          placeholder="Ask us anything..."
        />
        <button className="send-button"  style={{
            fontSize : `${buttonFontSize || 50}px`
          }}>➤</button>
      </div>
    </div>
  );
};

export default ChatBot;
