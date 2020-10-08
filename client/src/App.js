import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            MyApp
        </div>
    );
}

export default App;
