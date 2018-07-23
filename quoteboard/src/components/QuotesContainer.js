import React, { Component } from 'react'
import axios from 'axios'
import Quote from './quote'

class QuotesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/quotes')
    .then(response => {
      console.log(response)
      this.setState({quotes: response.data})
    })
    .catch(error => console.log(error))
  } 

  render() {
    return (
      <div>
      <table>
        <thead>
          <tr> 
            <th>ID</th>
            <th>Context</th> 
            <th>Quote</th>
            <th>Source</th>
            <th>Theme</th>
          </tr>
        </thead>
        <tbody>
        {this.state.quotes.map((quote) => {
          return (
          <tr>
            <td>{quote.id}</td>
            <td>{quote.context}</td> 
            <td>{quote.quote}</td>
            <td>{quote.source}</td>
            <td>{quote.theme}</td>
          </tr>
          )
        })}
        </tbody>
    </table>
    </div>
          
      
    );
  }
} 
 
export default QuotesContainer