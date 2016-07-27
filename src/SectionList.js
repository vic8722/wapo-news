import React, { Component } from 'react';
import jQuery from 'jquery';

class SectionList extends Component {
   state = {
    sections: []
  }

  componentWillMount() {
    const url = 'http://localhost:3002/articles/sections/';
    jQuery.get(url).then((data) => {
      // console.log('data', data);
      this.setState({sections: data});
    })
  }

  render() {
    const liSections = this.state.sections.map((section, idx) => {
      return <li key={'section-' + idx}><a href={section.link}>{section.section}</a></li>;
    })
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <h2>Sections</h2>
          </div>
          <p className="App-intro">
            Click on a section to get the articles from that section.
          </p>
        </div>
        <ol>
          {liSections}
        </ol>
      </div>
    )
  }

}

export default SectionList;
