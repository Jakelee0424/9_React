import React, { Component } from 'react';

class Exam1 extends Component {

    constructor(props){
        super(props);
        this.state = {
            count : 0,
            count2 : 10
        };
    }

    plus = () => {
        this.setState({ count : this.state.count + 1})
    }
    
    minus = () => {
        this.setState({ count : this.state.count - 1})
    }

    multiple = () => {
        this.setState({ count2 : this.state.count2 * 2})
    }

    divide = () => {
        this.setState({ count2 : this.state.count2 / 2})
    }
    
    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.plus} >더하기</button>
                <br></br>
                <br></br>
                <button onClick={this.minus}>빼기</button>
                <br></br>
                <br></br>

                <h1>Count2 : {this.state.count2}</h1>
                <button onClick={this.multiple}>곱하기 2</button>
                <br></br>
                <br></br>
                <button onClick={this.divide}>나누기 2</button>
            </div>
        );
    }
}

export default Exam1;