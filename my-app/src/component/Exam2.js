import React, { useState } from 'react';

const Exam2 = () => {

    const [count, setCount] = useState(0);
    const testCount = 10;

    const plus = () =>{
        setCount(count + 1)
    }

    const minus = () =>{
        setCount(count - 1)
    }

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={plus} >더하기</button>
            <br></br>
            <br></br>
            <button onClick={minus}>빼기</button>
            <br></br>
            <br></br>

        </div>
    );
};

export default Exam2;