import React, { Component } from 'react';
import jQuery from 'jquery';

class ArticleList extends Component {
   state = {
    articles: []
  }

  componentWillMount() {
    const url = 'http://localhost:3002/articles/sections/Going%20Out%20Guide';
    jQuery.get(url).then((data) => {
      //console.log('data', data);
      this.setState({articles: data});
    })
  }

  render() {
    const liArticles = this.state.articles.map((article, idx) => {
      return <li key={'article-' + idx}><a href={article.link}>{article.title}</a></li>;
    })
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <ol>
          {liArticles}
        </ol>
      </div>
    )
  }

}

export default ArticleList;
