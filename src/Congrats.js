import React from 'react';

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
      <span data-test="component-message">
        Congrats! You guessed the word!
      </span>
    </div>
    )
  } else {
    return (
      <div data-test="component-congrats"/>
    );
  }
}
 
export default Congrats;