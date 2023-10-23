//use memo hook implementation
import React, { useState, useMemo } from 'react';

const Hook = () => {
    const [count, setCount] = useState(0);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);
    console.log(calculation);
    const increment = () => {
        setCount((c) => c + 1);
    };
    const increment1 = () => {
        setCount(1);
    }

    return (
        <div>

            <div>
                Count: {count}
                <button onClick={increment}>button1</button>
                <button onClick={increment1}>button2</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>

        </div>
    );
};
//use memo saves the value, will recompute only if it is change otherwise it would return value
const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};

export default Hook;
