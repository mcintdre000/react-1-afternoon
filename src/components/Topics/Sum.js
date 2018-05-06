import React, { Component } from 'react';

export default class Sum extends Component {

    constructor() {
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updateInput1(value) {
        this.setState({
            number1: parseInt(value, 10)
        });
    }

    updateInput2(value) {
        this.setState({
            number2: parseInt(value, 10)
        });
    }

    assignSum(num1,num2) {
        this.setState({sum: num1 + num2});
    }

    render() {
        return(
            <div className="puzzleBox sumPB"> 
                <h4> Sum </h4>
                <input className="inputLine" type="number" onChange={event => this.updateInput1(event.target.value)}></input>
                <input className="inputLine" type="number" onChange={event => this.updateInput2(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.assignSum(this.state.number1,this.state.number2)}> Add </button>
                <span className="resultsBox"> Sum: {JSON.stringify(this.state.sum)}</span>
            </div>
        )
    }
}