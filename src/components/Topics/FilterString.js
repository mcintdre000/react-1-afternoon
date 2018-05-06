import React, { Component } from 'react';

export default class FilterString extends Component {

    constructor() {
        super();

        this.state = {
            unFilteredArray: ["Drew","Jin","Adam","Bryson","Paul","Aaron","Madison","Zubair"],
            userInput: '',
            filteredArray: []
        };
    }

    updateInput(value) {
        this.setState({
            userInput: value
        }); 
    }

    assignFilteredString(str) {
        let arr = this.state.unFilteredArray
        let filteredArray= [];

        for (let i =0; i < arr.length;i++) {
            if(arr[i].includes(str) ) {
                filteredArray.push(arr[i]);
            }        
        }

        this.setState({ filteredArray: filteredArray })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
                <input className="inputLine" onChange={ event => this.updateInput(event.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.assignFilteredString(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterStringRB"> Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}