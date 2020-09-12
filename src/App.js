import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SearchNav from "./components/SeachNav";
import Search from "./pages/Search";
import Saved from './pages/Saved';


function App() {
  return (
    <Router>
      <div>
        <SearchNav/>
        {/* <Link to="/">Search</Link> */}
        <Switch>
          <Route exact path="/">
            <Search/>
          </Route>
          <Route exact path="/saved">
            <Saved/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
