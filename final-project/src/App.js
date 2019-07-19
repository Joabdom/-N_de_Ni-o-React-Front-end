import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/home/home'
import Results from './components/results/Results'
import User from './components/user/User.jsx'


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <main>
            <Route exact path="/" component={Home}/>
            <Route exact path="/results" component={Results}/>
            <Route exact path="/user" component={User}/>
          </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
