import React from 'react';
import _ from 'lodash'

const Pagination = (props) => {
    const {itemsCount, pageSize} = props;
    const pageCount = itemsCount / pageSize;



    return ( <nav>
        <ul className="pagination">
            <li className="page-item"><a href="" className="page-link">1</a></li>
        </ul>
    </nav> );
}
 
export default Pagination;