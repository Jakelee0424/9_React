import React, {useState} from 'react';

const Exam5 = () => {

    const test = "Lee";

    // return <Exam5_1 test={test}/>
    // return <Exam5_2 />
    // return <Exam5_3 isLogin={false}/>
    return <Exam5_4 />

};

//jsx 예제 1 : 기본 태그
function Exam5_1(props){
    
    const name = "react";
    const element = <h1>hello, {name}, {props.test}!</h1>;

    return element;
}

// jsx 예제 2 : img 태그
function Exam5_2(){

    const [userImg, setUserImg] = useState("https://i.ibb.co/b7CSJ51/image.jpg");
    const element = <img src={userImg} />

    return element;
}

// jsx 예제 3 : 로그인 여부에 따라 화면 다르게 보이기
function Exam5_3(props){

    if(props.isLogin){
        return <h1>welcome</h1>
    } else {
        return <h1>Bye~</h1>
    }

}

// jsx 예제 4 : 배열을 이용한 화면 렌더링
function Exam5_4(){

    const numbers = [1, 2, 3, 4, 5];

    const listItems = numbers.map((number) => <li>{number}</li>);

    return <ul>{listItems}</ul>
}



export default Exam5;