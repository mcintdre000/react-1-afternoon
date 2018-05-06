import React, { Component } from 'react';

export default class Palindrome extends Component {

    constructor(){
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    updateInput(value) {
        this.setState({
            userInput: value
        });
    }

    assignPalindrome(userInput) {
        let forwards= userInput;
        let backwards= userInput;
        backwards = backwards.split('').reverse().join('');

        if ( forwards === backwards) {
            this.setState({ palindrome: 'true' });
        } else { 
            this.setState({ palindrome: 'false' });
        }
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Palindrome </h4>
                <input className="inputLine" onChange={event => this.updateInput(event.target.value)}></input>
                <button className="confirmationButton" onClick={()=> this.assignPalindrome(this.state.userInput)}> Check </button>
                <span className="resultsBox"> Palindrome: {JSON.stringify(this.state.palindrome)}</span>
            </div>
        );
    }
}