// import React from 'react'
// import QuotesContainer from './QuotesContainer'

// renderPagination(currentQuotes) {
//   const { currentPage, quotesPerPage } = this.state;
//   const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(currentQuotes.length / quotesPerPage); i++) {
//       pageNumbers.push(i);
//     }
//   const renderPageNumbers = pageNumbers.map((number) => {
//       return (
//         <div>
//           <li
//             key={number}
//             id={number}
//             onClick={this.handleClick}
//         >
//         {number}
//         </li>
//           <div>
//             <ul id="page-numbers">
//               {renderPageNumbers}
//             </ul>
//           </div>
//       </div>
//         );
//  }

//  export default renderPagination