import React, { Component } from 'react';
import gigaChad from '../Gigachad.gif';
import GitDisplay from './gitDisplay';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className="App">
                <header className="App-header">
                    <img src={gigaChad} className="App-logo" alt="Here's some Giga Chad" />
                </header>
                <GitDisplay />
    </div>
        );
    }
}

export default Home;