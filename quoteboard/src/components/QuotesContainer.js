import React, { Component } from 'react'
import axios from 'axios'

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
      <div className="">
        Quotes
      </div>
    );
  }
} 
 
export default QuotesContainer