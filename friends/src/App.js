import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import FriendsList from './components/FriendsList'

function App() {
  return (
    <div className="App">
      <Link to="/login">Login</Link>

      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path='/protected' component={FriendsList}/>
      </Switch>
        
    </div>
  );
}

export default App;
