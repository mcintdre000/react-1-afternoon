import React, { Component } from 'react';


export default class EvenAndOdd extends Component {

    constructor() {
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }

    }

    updateInput (value){
        this.setState({
            userInput: value,
        });
    }

    
    

    assignEvenAndOdd(userInput){
        let arr = userInput.split(',');
        let evens = [];
        let odds = [];
        for(let i=0;i<arr.length;i++){
            arr[i]%2 === 0 ? evens.push(parseInt(arr[i],10)) : odds.push(parseInt(arr[i],10));
          }
          this.setState({
            evenArray: evens,
            oddArray: odds,
          });
        }
    

   

    render(){
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4> Evens and Odds </h4>
                <input className="inputLine" onChange={event =>this.updateInput(event.target.value)}></input>
                <button className="confirmationButton" onClick={() =>{this.assignEvenAndOdd(this.state.userInput)}}> Split </button>
                <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) }</span>
                <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) }</span>
            </div>
            

        );
    }  
}


