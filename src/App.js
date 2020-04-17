import React, {Component} from 'react';
import {connect} from 'react-redux'
import actions from './store/actions.js';

import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor (props) {
        super (props);
    }

    render () {
        console.log (this.props.propState);
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <button onClick = {() => console.log(this.props.state)}>
                        Show Properties
                    </button>
                    <button onClick = {() => this.props.exampleAction()}>
                        Change Property
                    </button>
                    <button onClick = {() => this.props.exampleActionTwo()}>
                        Change Property
                    </button>
                </header>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        state : state
    };
}

const mapDispatchToProps = dispatch => {
    return {
        exampleAction : () => dispatch({type : actions.ACTION_TYPE_ONE, payload : "someData"}),
        exampleActionTwo : () => dispatch({
            type : actions.ACTION_TYPE_TWO,
            payload: {
                payload1 : "Some data",
                payload2: "some more data"
            }
        })
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
