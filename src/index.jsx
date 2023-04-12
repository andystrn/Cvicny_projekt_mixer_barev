import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Slider from './components/ColorSlider';

const App = () => {
  const [redValue,setRedValue] = useState(0);
  const [greenValue,setGreenValue] = useState(0);
  const [blueValue,setBlueValue] = useState(0);

  return (
    <div className="container">
     <div className="color-panel">
      <h1>Mixér barev</h1>
      <div className="sliders">
        <Slider baseColor="red" colorName="Červená" onValueChange={setRedValue}/>
        <Slider baseColor="green" colorName="Zelená" onValueChange={setGreenValue}/>
        <Slider baseColor="blue" colorName="Modrá" onValueChange={setBlueValue}/>
      </div>
     </div>
     <div style={{backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})` }} className="color-box" id="color-box"></div>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
