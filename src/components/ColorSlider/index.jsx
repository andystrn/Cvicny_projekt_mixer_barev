import React, { useState } from 'react';
import './style.css';

const Slider = ( {baseColor, colorName, onValueChange} ) => {   
    return (
    <>
        <label htmlFor={baseColor}>{colorName}</label>
			<input defaultValue={0} onChange={(e) => onValueChange(e.target.value) }
                type="range"
                className={`slider slider--${baseColor}`}
                id={`${baseColor}Slider`}
                min="0"
                max="255"
            />
    </>
    )
}

export default Slider;