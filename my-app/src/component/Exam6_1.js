//context 미사용 시

import React, {useState} from 'react';

// 최상위 컴포
const Exam6_1 = () => {
    
    const [user, setUser] = useState("홍길동");
    
    return (
        <div>
            <h1>Hello, {user}!</h1>
            <Component2 user={user}/>

        </div>
    );
};

// 
function Component2({user}){
    return (
        <div>
            <h1>컴포 2</h1>
            <Component3 user={user}/>
        </div>
    )
}

function Component3({user}){
    return (
        <div>
            <h1>컴포 3</h1>
            <Component4 user={user}/>
        </div>
    )
}

function Component4({user}){
    return (
        <div>
            <h1>컴포 4</h1>
            <Component5 user={user}/>
        </div>
    )
}

function Component5({user}){

    return (
        <h1>{user}</h1>
    )
}
export default Exam6_1;