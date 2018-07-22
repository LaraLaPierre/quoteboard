import React, { Component } from 'react'
import './App.css'
import QuotesContainer from './components/QuotesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Quote Board</h1>
        </header>
        <QuotesContainer />
      </div>
    );
  }
} 
 
export default App
