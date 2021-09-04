import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types'; // ES6

const Pagination = props => {
    const { currentPage,  pageSize} = props;
    const itemsCount = 7;
    //console.log(itemsCount, currentPage, pageSize);
    const pagesCount = Math.ceil( itemsCount / pageSize) ;
    
   
    if(pagesCount === 1)
        return null;
   const pages =  _.range(1, pagesCount + 1);



    return ( <nav>
        <ul className="pagination">
            {pages.map(page => (
            <li key = {page} className= {page === currentPage ? 'page-item active' : 'page-item'}>
             <a  className="page-link" 
             onClick = { () => props.onPageChange(page)}>
                {page}</a>
            </li>
            ))}
        </ul>
    </nav> );
}

Pagination.propTypes = {
    itemsCount : PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired

};
 
export default Pagination;