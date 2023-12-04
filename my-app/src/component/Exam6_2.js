//context 사용 시

import React, {useState, useContext, createContext} from 'react';

//context API : react 컴포넌트 트리 전체에서 
//              데이터를 공유할 수 있는 방법 제공 
//              -> 중첩된 구조에서 불필요한 drilling 방지

//              {useContext} 훅 필요

// context함수 생성
const UserContext = createContext();

// 최상위 컴포
const Exam6_2 = () => {
    
    const [user, setUser] = useState("홍길동");
    
    return (
        //UserContext.Provider : 하위 컴포에 데이터 전달시 사용
        <div>
            <UserContext.Provider value={user}>
                <h1>Hello, {user}!</h1>
                <Component2 />
            </UserContext.Provider>
        </div>
    );
};

// 
function Component2(){
    return (
        <div>
            <h1>컴포 2</h1>
            <Component3/>
        </div>
    )
}

function Component3(){
    return (
        <div>
            <h1>컴포 3</h1>
            <Component4 />
        </div>
    )
}

function Component4(){
    return (
        <div>
            <h1>컴포 4</h1>
            <Component5 />
        </div>
    )
}

function Component5(){

    const user = useContext(UserContext);

    return (
            <h1>{user}</h1>
    )
}
export default Exam6_2;