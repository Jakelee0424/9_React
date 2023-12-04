import React, { useState } from 'react';

const TodoList = () => {

    const [todo, setTodo] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const add  = () => {
        //  '...' 자바스크립트 연산자  -> 기존 배열이나, 객체의 전체 또는 일부를 객체로 복사함
        setTodo( [ ...todo, {title : inputValue, isDone : false} ] );
        setInputValue("");
    }

    const deleteTodo = (index) => {

        //splice 함수(잘라내기) -> mutate : 원본이 변경되는 함수. so, 똑같은 형태의 배열을 만들어 함수 사용
        //splice(index 번호, 갯수)

        const tempTodo = [...todo];
        tempTodo.splice(index, 1);
        setTodo(tempTodo);
    }
    
    const done = (index) => {
        
        const tempTodo = [...todo];
        tempTodo[index].isDone = !tempTodo[index].isDone;
        setTodo(tempTodo)
    }

    return (
        <div>
            
            <h1>My To-do List</h1>
            <input value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
            <button onClick={add}>Add</button>

            <ul>
                {
                    todo.map((todo, index) => (
                        <li key={index} >
                            <span style={{color: todo.isDone ? 'green' : 'red'}}>{todo.title}</span>&nbsp;&nbsp;&nbsp;
                            <button onClick={() => done(index)}>{todo.isDone ? '완료' : '미완료'}</button>
                            <button onClick={() => deleteTodo(index)}>삭제</button>
                        </li>
                    ))
                }
            </ul>

        </div>
    );
};

export default TodoList;