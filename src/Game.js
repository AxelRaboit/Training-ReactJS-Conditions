import React, { Component } from 'react';

class Game extends Component {

    state = {
        name: "Mario",
        winner: null
    }

    makeWin = () => {
        this.setState({
            winner: true
        })
    }

    makeLoose = () => {
        this.setState({
            winner: false
        })
    }
    
    render() {
        
        const buttonStyle = {
            'backgroundColor': '#2277f2',
            'color':'white',
            'margin': '10px',
            'padding': '10px',
            'borderRadius': '5px',
            'border': 'none',
            'cursor':'pointer'
        }
        //Test
        return (
            <div>
                <div className='result'>
                    {
                        this.state.winner == true
                            ? (<h1>Bravo {this.state.name} !</h1>)
                            : (<h1>Tu as raté !</h1>)
                    }
                </div>
                <button onClick={this.makeWin} style={buttonStyle}>Click to win</button>
                <button onClick={this.makeLoose} style={buttonStyle}>Click to loose</button>
            </div>

        )

        //Possibility 1 (to get everything in one line)
        /* return this.state.winner ? <h1>Bravo {this.state.name} !</h1> : <h1>Tu as raté !</h1> */

        //Possibility 2 (to don't display else)
        /* return this.state.winner ? <h1>Bravo {this.state.name} !</h1> : '' */

        //Possibility 3 (to don't display else but better)
        /* return this.state.winner && <h1>Bravo {this.state.name} !</h1> */

        //Possibility 4
        /* return(
            this.state.winner 
                ? (<h1>Bravo {this.state.name} !</h1>)
                : (<h1>Tu as raté !</h1>)
        ) */

        //Possbility 5
        /* let result;

        if(this.state.winner == true){
            result =  <h1>Bravo {this.state.name} !</h1>;
        } else {
            result =  <h1>Tu as raté !</h1>;
        }

        return result; */

        //Possbility 6
        /* let result;

        if(this.state.winner == true){
            result =  <h1>Bravo {this.state.name} !</h1>;
        } else {
            result =  <h1>Tu as raté !</h1>;
        }

        return result; */

        //Possibility 7
        /* if(this.state.winner == true){
            return <h1>Bravo {this.state.name} !</h1>;
        } else {
            return <h1>Tu as raté !</h1>;
        } */

        //Possibility 8
        /* if(this.state.winner == true){
            return (
                <div>
                    <h1>Bravo {this.state.name} !</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>Tu as raté !</h1>
                </div>
            );
        } */

    }
}

export default Game;
