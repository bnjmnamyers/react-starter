import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Boom from './components/Boom/Boom';
import Shakalaka from './components/Shakalaka/Shakalaka';

import './styles/main.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello, React!!!</h1>
            </div>
        );
    }
}

export default App;