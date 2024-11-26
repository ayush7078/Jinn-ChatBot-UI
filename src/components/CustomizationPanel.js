import React, { useState, useEffect } from "react";
import "../App.css";

const CustomizationPanel = ({ customization, onChange }) => {
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      onChange(name, value);
    };

    const [fonts, setFonts] = useState([]);

    useEffect(() => {
      // Fetch fonts from Google Fonts API
      const fetchFonts = async () => {
        try {
          const response = await fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC2WLhvjJ-Wg--tUiTKeoyLllG3Y83uk3Q");
          const data = await response.json();
          setFonts(data.items);  // Save fonts list into state
        } catch (error) {
          console.error("Error fetching fonts:", error);
        }
      };
  
      fetchFonts();
    }, []); // Run once on mount

    return (
      <div className="customization-panel">
        <h2>🔧 Customize Your ChatBot</h2>
        <p>Adjust the appearance and behavior of the ChatBot in real-time.</p>
  
        {/* Section for Button Icon, User Name, Demo Bot Text */}
        {/* Chat Icon Size */}
        <div className="section">
          <h3>Button & Chat Icon</h3>
          <label className="input-group">
            <span>Chat Icon Font Size:</span>
            <input
              type="number"
              name="chatIconfont"
              value={customization.chatIconfont}
              onChange={handleInputChange}
              placeholder="e.g., 50"
            />
          </label>
          <label className="input-group">
            <span>Button Icon Font Size:</span>
            <input
              type="number"
              name="buttonFontSize"
              value={customization.buttonFontSize}
              onChange={handleInputChange}
              placeholder="e.g., 20"
            />
          </label>
        </div>
  
        {/* Appearance Section with Title Background and Border Color side by side */}
        <div className="section">
          <h3>Appearance</h3>
          <div className="appearance-row">
            <label className="input-group">
              <span>Title Background Color:</span>
              <input
                type="color"
                name="titleBgColor"
                value={customization.titleBgColor}
                onChange={handleInputChange}
              />
            </label>
            <label className="input-group appearence-setting">
              <span>Border Color:</span>
              <input
                type="color"
                name="borderColor"
                value={customization.borderColor}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div className="input-group">
            <span>Border Radius:</span>
            <input
              type="text"
              name="borderRadius"
              value={customization.borderRadius}
              onChange={handleInputChange}
              placeholder="E.g., '10px'"
            />
          </div>

          <div className="input-group">
            <span>Font Family:</span>
            <select name="fontFamily" value={customization.fontFamily} onChange={handleInputChange}>
             {console.log("fonts", fonts)
             }
              {fonts && fonts.length > 0 ? (
                fonts.map((font) => (
                  <option key={font.family} value={font.family}>
                    {font.family}
                  </option>
                ))
              ) : (
                <option value="Arial, sans-serif">Arial</option> 
              )}
            </select>
          </div>
        </div>
  
        {/* Chat Bubbles Section */}
        <div className="section">
          <h3>Chat Bubbles Color</h3>
          <div className="row">
            <div className="column">
              <label className="input-group">
                <span>Bot Bubble:</span>
                <input
                  type="color"
                  name="botBubbleColor"
                  value={customization.botBubbleColor}
                  onChange={handleInputChange}
                />
              </label>
              <label className="input-group">
                <span>Bot Text:</span>
                <input
                  type="color"
                  name="botTextColor"
                  value={customization.botTextColor}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="column">
              <label className="input-group">
                <span>User Bubble:</span>
                <input
                  type="color"
                  name="userBubbleColor"
                  value={customization.userBubbleColor}
                  onChange={handleInputChange}
                />
              </label>
              <label className="input-group">
                <span>User Text:</span>
                <input
                  type="color"
                  name="userTextColor"
                  value={customization.userTextColor}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default CustomizationPanel;
