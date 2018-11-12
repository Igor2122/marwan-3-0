import React, { Component } from 'react';
import Projects from './components/Projects'; 
import './App.css';

class App extends Component {
  constructor (){
    super();
    this.state = {
      projects: [
        {
          title: 'Business Website', 
          category: 'Web Desing'
        },
        {
          title: 'Social App', 
          category: 'Mobile Develpment'
        },
        {
          title: 'E commerce Shopping Cart', 
          category: 'Web Develpment'
        }
        ]
    };
  }
  render() {
    return (
      <div className="App">
        <h1>My app</h1>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
