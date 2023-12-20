import React, {useState} from 'react';

const NumberPlusMinus = () => {
    
    const [num, setNum] = useState(0)
    
    const plus = () => {
        setNum(num + 1)
    }

    const minus = () => {
        setNum(num - 1)
    }

    return (
        <div>

            <button class='minusBtn' onClick={minus}>-</button>
            <span>{num}</span>
            <button class='plusBtn' onClick={plus}>+</button>
            
        </div>
    );
};

export default NumberPlusMinus;