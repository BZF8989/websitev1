import React, { Component } from 'react';
import './App.css';
import Main from './Main/Main';
import Blog from './Blog/Blog';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';





class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/*' component={Main}/>
          {/* <Route path='/#*' component={Main} /> */}
          {/* <Route path='/blog' component={Blog} /> */}
          {/* <Route path='/*' component={PageNotFound} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;


/*
  s<Footer className="Footer">Footer</Footer>
*/
