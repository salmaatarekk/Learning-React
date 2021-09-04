import React from 'react';

const ListGroup = (props) => {

    const {items, textProperty, valueProperty} = props;
    return ( 
    <ul className="list-group">
        {items.map(item => 
        <li key = {items.id} className="list-group-item"> {item} </li> )}
    </ul>

     );
}
 
export default ListGroup;