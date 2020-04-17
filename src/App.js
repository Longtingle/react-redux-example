import React, {Component} from 'react';
import {connect} from 'react-redux'
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
                    <button onClick = {() => console.log(this.props.propState.prop1)}>
                        Click!
                    </button>
                </header>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        propState : state
    };
}

const mapDispatchToProps = dispatch => {
    return {
        exampleAction : () => dispatch({type : "ACTION_TYPE", payload : "someData"})
    };
}


export default connect(mapStateToProps, mapStateToProps)(App);
