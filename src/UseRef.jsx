//use ref hook two diff implementations
// import { useState, useEffect, useRef } from "react";

// import { useRef } from "react";
//
// function useRef() {
//     const inputElement = useRef();
//
//     const focusInput = () => {
//         inputElement.current.focus();
//     };
//
//     return (
//         <>
//             <input type="text" ref={inputElement}/>
//             <button onClick={focusInput}>Focus Input</button>
//         </>
//     );
//
// }
//     export default useRef;

import React, { useState, useRef } from 'react';

function UseRef() {
    const [count, setCount] = useState(0);
    const refValue = useRef(0);

    const incrementCount = () => {
        setCount(count + 1);

    };
    console.log("re renders only using the state")
    const incrementCount2 = () => {
        refValue.current = refValue.current+1;

    };

    return (
        <div>
            <p>State Count: {count}</p>
            <p>Ref Value: {refValue.current}</p>
            <button onClick={incrementCount}>Increment Count</button>
            <button onClick={incrementCount2}>Increment2 Count</button>
        </div>
    );
}

export default UseRef;
