import React, { useState, useCallback } from 'react';
import Child from "./Child";
function Parent() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState(1);

    // Define a function using useCallback to memoize it
    const handleButtonClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);//will render child when ever our state count changes


    // Define a function to update the message state
    const updateMessage = () => {
        setMessage(3);
    };//will render the child once only

    return (
        <div>
            <h2>Parent Component</h2>
            <p>Count: {count}</p>
            <p>Message: {message}</p>
            <button onClick={handleButtonClick}>Increment Count</button>
            <button onClick={updateMessage}>Change Message</button>
            <Child onRender={handleButtonClick} />
        </div>
    );
}

export default Parent;
