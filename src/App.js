import React, { Component } from 'react';
import './App.css';
import { Router, Route, browserHistory} from 'react-router';
import ArticleList from './ArticleList.js';
import SectionList from './SectionList.js';


class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={ArticleList} />
        <Route path="/sections" component={SectionList} />
      </Router>
    );
  }
}

export default App;
