import React, { Component } from 'react';

export default class ReverseFirstAndLast extends Component {

    constructor() {
        super();

        this.state = {
            userInput: '',
            reversedArray: []
        }
    }

    updateInput(value) {
        this.setState({
            userInput: value
        });
    }

    assignReversedArray(userInput) {
        let arr = userInput.split(',').map(e=>parseInt(e,10));
        // let reversedArray = [];
        if (arr.length>1) {
            let first = arr[0];
            arr[0] = arr[arr.length-1];
            arr[arr.length-1] = first;
            // reversedArray.push(arr);
        }
        this.setState({
            reversedArray: arr
        });
    }
    render() {
        return(
            <div className="puzzleBox ReverseFirstAndLastPB">
                <h4> Reverse First & Last </h4>
                <input className="inputLine" onChange={event => this.updateInput(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.assignReversedArray(this.state.userInput)}> Reverse </button>
                <span className="resultsBox"> New Array: {JSON.stringify(this.state.reversedArray)}</span>
            </div>
        )
    }
}