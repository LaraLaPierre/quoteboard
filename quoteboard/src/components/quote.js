import React from 'react'

const Quote = ({quote}) =>
  <div className = "tile" key={quote.id}>
    <h4>{quote.context}</h4> 
    <p> {quote.quote}</p>
  </div> 

export default Quote 

