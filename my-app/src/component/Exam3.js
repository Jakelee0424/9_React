import React, { useState } from 'react';


// 상태 내리꽂기(props drilling) : 부모가 가진 상태(state)를 자식에게 전달 
//                              -> 자식이 사용할 수 있게 함

// 부모 컴포넌트
const Exam3 = () => {
    
    const [name, setName] = useState("유재석");
    // 리액트 컴포넌트에 state를 변경해야할 때, 
    // 무조건 setState를 통해서 업데이트 해주어야하며,
    // 업데이트 하는 과정에서 기존의 상태값을 직접적으로 수정하면 안됨 == 불변성의 법칙
   
    return (
        <MyComponent name={name}/>
    );
};

// 자식 컴포넌트
const MyComponent = (props) => {
    return (
        <div>
            <p>ㅎㅇ</p>
            <p>안녕하세요</p>
            <p>{props.name}</p>
        </div>
    );
}


export default Exam3;