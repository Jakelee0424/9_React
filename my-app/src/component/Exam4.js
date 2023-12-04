import React, {useState} from 'react';


// 부모 컴포넌트
const Exam4 = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    function onchangeId(e){
        setId(e.target.value); 
    }

    function onchangePw(e){
        setPw(e.target.value); 
    }
    
    return (
        <>
        <Id onchangeId={onchangeId}/>
        <Pw onchangePw={onchangePw}/>
        <div>
            <button disabled={(id.length === 0) || (pw.length === 0)}>Login</button>
        </div>
        </>   
    );
};

// 자식 컴포넌트1
const Id = ({onchangeId}) => {

    return (
        <div>
            <label htmlFor='id'>ID : </label>
            <input id='id' onChange={onchangeId}/>
        </div>
    );
};

// 자식 컴포넌트2
const Pw = (props) => {

    return (
        <div>
           <label htmlFor='pw'>PW : </label>
            <input id='pw' onChange={props.onchangePw}/>
        </div>
    );
};


export default Exam4;