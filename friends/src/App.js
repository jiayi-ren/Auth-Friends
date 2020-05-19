import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Friends from './components/Friends';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <ul className="nav-bar">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
            <li className="nav-item"> <NavLink className="nav-link" to="/friends">Friends</NavLink></li>
          </ul>
        </div>
      </div>
      <Switch>
        <ProtectedRoute exact path="/friends" component={Friends}></ProtectedRoute>
        <Route path="/login" component={Login}></Route>
        {/* <Route ></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
