import React, {Component} from 'react';
import Like from './common/like';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';
import Table from './common/table';

class MoviesTable extends Component {

    columns = [
        {path : 'title', label : 'Title'},
        {path : 'genre', label : 'Genre'},
        {path : 'numberInStock', label : 'Stock'},
        {path : 'dailyRentalRate', label : 'Rate'},
        {key : 'like',
         content: movie => <Like liked = {movie.liked} onClick = { () => this.props.onLike(movie) } /> },

        {key : 'delete',
         content : movie => <button onClick = {() => this.props.onDelete(movie)}   className= "btn btn-danger btn-sm">Delete</button>}
    ];
    

    render() { 
        
        const {movies , onSort, sortColumn} = this.props;
        return ( 
           <Table
           columns = {this.columns}
           data = {movies}
           sortColumn = {sortColumn}
           onSort = {onSort}
           />
    
         );

    }
}
 

 
export default MoviesTable;