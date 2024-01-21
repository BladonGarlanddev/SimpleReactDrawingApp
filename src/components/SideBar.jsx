import React, {useState} from "react";

const SideBar = ({color, setColor, setSize, size, sideBarWidth, setSideBarWidth, canDraw}) => {

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    }

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }

    if (canDraw) {
        var style = {
          width: `${sideBarWidth}px`,
          borderRight: "1px solid black",
          height: "100vh",
        };
    } else {
        var style = {
          width: `${sideBarWidth}px`,
          borderRight: "1px solid black",
          height: "100vh",
          pointerEvents: "none",
          userSelect: "none",
        };
    }

    

    return (
      <div style={style}>
        <div>
          <select onChange={handleColorChange}>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Green</option>
            <option value='white'>Erase</option>
          </select>
        </div>
        <div>
          <h3>Change Size</h3>
          <input
            type='range'
            min='1'
            max='100'
            value={size}
            onChange={handleSizeChange}
          />
          <p>Size: {size}</p>
        </div>
      </div>
    );
}

export default SideBar;