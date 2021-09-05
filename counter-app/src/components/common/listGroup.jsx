import React from 'react';

const ListGroup = ( {items,  onItemSelect, selectedItem}) => {

    return ( 
    <ul className="list-group">
        {items.map(item => 
        <li  onClick = {() => onItemSelect(item)  } key = {items.id} className={ "clickable " +  (item === selectedItem ? "list-group-item active" : "list-group-item") } > {item} </li> )}
    </ul>

     );
};


 
export default ListGroup;