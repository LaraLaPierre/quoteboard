import React, { Component } from 'react'
import axios from 'axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

class QuotesContainer extends Component {
  state = {
    quotes: [],
    columns: [{
      dataField: 'id',
      text: 'ID',
      sort: true
    },
    {
      dataField: 'context',
      text: 'Context',
      sort: true,
      filter: textFilter()
    }, 
    {
      dataField: 'quote',
      text: 'Quote',
      sort: true,
      filter: textFilter()
    },
    {
      dataField: 'source',
      text: 'Source',
      sort: true,
      filter: textFilter()
    },
    {
      dataField: 'theme',
      text: 'Theme',
      sort: true,
      filter: textFilter()
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
        columns={ this.state.columns } 
        filter={ filterFactory() } 
        pagination={ paginationFactory() }
        headerClasses={"header"} />
      </div>
    );
  }
}

export default QuotesContainer