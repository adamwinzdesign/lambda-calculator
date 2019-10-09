import React from "react";
import Numbers from './Numbers';

export const NumberButton = (props) => {
  return (
    // <>
    //   {/* Display a button element rendering the data being passed down from the parent container on props */}
    // </>
    <div className = 'number-button'><button>{props.currentNumber}</button></div>
  );
};
