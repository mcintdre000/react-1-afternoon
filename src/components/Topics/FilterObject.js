import React, { Component } from 'react';


export default class FilterObject extends Component {

    constructor() {
        super();

        this.state = {
            unFilteredArray: [
                {name: "Drew", age: 22, title: "student"},
                {name: "Devin", hair_color: "brown", title: "landscaper"},
                {name: "Kendon", title: "student coordinator"}
            ],
            userInput: '',
            filteredArray: []
        }
    }

    updateInput(value) {
        this.setState({
            userInput: value
        });
    }

    assignfilteredObject(key) {
        let arr = this.state.unFilteredArray;
        let filteredArray = [];

        for(let i=0;i<arr.length;i++){
           if(arr[i].hasOwnProperty([key])) 
           { filteredArray.push(arr[i])}
        }
        this.setState({ filteredArray: filteredArray }) 
    }

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span >
                <input className="inputLine" onChange={event => this.updateInput(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.assignfilteredObject(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredArray,null,10)}</span>
            </div>
        );
    }
}