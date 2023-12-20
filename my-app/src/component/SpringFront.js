import React, { useState } from 'react';

const SpringFront = () => {
    const [message, setMessage] = useState([]);
    const [user, setUser] = useState("");

    const getPortNo = () => {

        fetch("/getPortNo")
            .then((res) => res.json())
            .then((data) => setMessage(data))
            .catch((err) => console.log("err :: ", err));

    };


    const getUserInfo = () => {

        fetch("/getUserInfo", {
            method: "post",
            headers: {
                'content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: "홍길동",
                age: "20"
            })
        })
            .then((res) => res.text())
            .then((data) => setUser(data))
            .catch((err) => console.log("err :: ", err));



    }

    return (
        <div>

            <div>
                <p>1. 서버로부터 응답 받은 값</p>
                <button onClick={getPortNo}>통신하기</button>
                <ul>
                    {message.map((el, idx) => <li key={idx}>{el}</li>)}
                </ul>
            </div>

            <div>
                <p>2. 서버로 값 전달 후, 응답 받은 값</p>
                <button onClick={getUserInfo}>통신하기</button>
                <ul>
                    {user && <li>{user}</li>}
                </ul>
            </div>


        </div>
    )
}

export default SpringFront;