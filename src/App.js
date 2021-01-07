import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import About from "./routes/About.js";
import Home from "./routes/Home.js";

function App() {
    return (
        <HashRouter>
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
        </HashRouter>
    );
}

export default App;