import React, {useEffect, useState} from "react";
import Canvas from "./components/Canvas";
import SideBar from "./components/SideBar";

function App() {
  const [blotchObjects, setBlotchObjects] = useState([]);
  const [mouseDown, setMouseDown] = useState(false);
  const [canDraw, setCanDraw] = useState(false);

  const [color, setColor] = useState("black");
  const [size, setSize] = useState(10);
  const [sideBarWidth, setSideBarWidth] = useState(200);

  const handleMouseUp = (event) => {
    setMouseDown(false);
  }

  const handleMouseDown = (event) => {
    if(event.button === 0) {
      setMouseDown(true);
    }
  }

  useEffect(() => {
    const handleMouseMove = (event) => {
      if(mouseDown && event.clientX > sideBarWidth) {
        setCanDraw(true);
        setBlotchObjects((prevData) => [...prevData, {coords: {x: event.clientX - sideBarWidth, y: event.clientY}, color: color, size: size}])
      } else if(event.mouseX < sideBarWidth) {
        setCanDraw(false);
      }
    }
    

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseDown])

  console.log(JSON.stringify(blotchObjects));

  const style = {
    display: 'flex'
  }

  return (
    <div style={style}>
      <SideBar color={color} setColor={setColor} setSize={setSize} size={size} sideBarWidth={sideBarWidth} setSideBarWidth={setSideBarWidth} canDraw={canDraw}/>
      <Canvas blotchObjects={blotchObjects} />
    </div>
  );
}

export default App;
