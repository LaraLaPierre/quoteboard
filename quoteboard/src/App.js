import React, { Component } from 'react'
import './App.css'
import QuotesContainer from './components/QuotesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Famous Quotes from Movies and Games</h1>
        </header>
        <QuotesContainer />
      </div>
    );
  }
} 
 
export default App
