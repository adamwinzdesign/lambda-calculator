import React from "react";
import Numbers from './Numbers';

export const NumberButton = () => {
  return (
    // <>
    //   {/* Display a button element rendering the data being passed down from the parent container on props */}
    // </>
    <div className = 'number-button'>{props.currentNumber}</div>
  );
};
