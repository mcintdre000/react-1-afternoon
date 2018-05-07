import React, { Component } from 'react';

export default class FizzBuzz extends Component {

    constructor(){
        super();

        this.state = {
            userInput: '',
            newArray: []
        }
    }

    updateInput(value) {
        this.setState({
            userInput: value
        });
    }

    fizzbuzz(userInput) {
        let n = parseInt(userInput,10)
        let newArray = [];
        for(let i =1;i<=n;i++) {
            if( i % 15 === 0) {
            newArray.push( "FizzBuzz" );
        }
            else if( i % 3 === 0) {
            newArray.push( "Fizz" );
        }
            else if( i % 5 === 0) {
            newArray.push( "Buzz" );
        }
            else {
            newArray.push(i);
        }
    }
    this.setState({
        newArray: newArray
    });
}


    render(){
        return(
            <div className="puzzleBox FizzBuzzPB">
                <h4> FizzBuzz Array </h4>
                <span className="puzzleText"></span>
                <input className="inputLine" onChange={ event => this.updateInput( event.target.value )}></input>
                <button className="confirmationButton" onClick={ () => this.fizzbuzz( this.state.userInput )}> Change </button>
                <span className="resultsBox"> New Array: {JSON.stringify(this.state.newArray)}</span>
            </div>
        )
    }
}