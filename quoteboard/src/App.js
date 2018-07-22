// import React, { Component } from 'react'
// import './App.css'
// import QuotesContainer from './components/QuotesContainer'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Quote Board</h1>
//         </header>
//         <QuotesContainer />
//       </div>
//     );
//   }
// } 
 
// export default App

 
import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';

class App extends Component {
  state = {
    quotes: [],
    columns: [{
      dataField: 'id',
      text: 'ID'
    },
    {
      dataField: 'context',
      text: 'Context'
    }, 
    {
      dataField: 'quote',
      text: 'Quote'
    },
    {
      dataField: 'source',
      text: 'Source'
    },
    {
      dataField: 'theme',
      text: 'Theme',
      sort: true
    }]
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/quotes')
      .then(response => {
        this.setState({
          quotes: response.data
        });
      });
  }
  
  render() {
    return (
      <div className="container" style={{ marginTop: 50 }}>
        <BootstrapTable 
        striped
        hover
        keyField='id' 
        data={ this.state.quotes } 
        columns={ this.state.columns } />
      </div>
    );
  }
}

export default App;
 