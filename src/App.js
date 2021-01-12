import React from 'react';
import Home from './router/Home.js';
import About from './router/About.js';
import Detail from './router/Detail.js';
import {HashRouter, Route} from 'react-router-dom';
import Navigation from './component/Navigation';

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/detail" component={Detail} />
        </HashRouter>
    );
}

export default App;