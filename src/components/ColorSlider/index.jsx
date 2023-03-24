import React, { useEffect, useState } from 'react';
import './style.css';

const Slider = ( {baseColor, colorName, onValueChange} ) => {
    const [valueColor, setValueColor] = useState(0);

    const handleOnChange = (event) => {
        setValueColor(event.target.value);
        onValueChange(event.target.value);
    }

    return (
    <>
        <label htmlFor={baseColor}>{colorName}</label>
			<input onChange={(e) => handleOnChange(e)}
                type="range"
                className={`slider slider--${baseColor}`}
                id={`${baseColor}Slider`}
                min="0"
                max="255"
                value={valueColor}
            />
    </>
    )
}

export default Slider;