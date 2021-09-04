import React, { Component } from 'react';
import Like from './common/like';
import Pagination from './common/pagination';
class Movies extends Component {
    state = { 
        movies : [
            {
                id: 1,
                title : 'Terminator',
                genre : 'Action',
                numberInStock: 6,
                dailyRentalRate : 2.5,
                liked : true
            },
            {
                id: 2,
                title : 'Die Hard',
                genre : 'Action',
                numberInStock: 5,
                dailyRentalRate : 2.5,
                liked : true
            },
            {
                id: 3,
                title : 'Wedding Crashers',
                genre : 'Comedy',
                numberInStock: 7,
                dailyRentalRate : 3.5,
                liked : true
            },
            {
                id: 4,
                title : 'Gone Girl',
                genre : 'Thiller',
                numberInStock: 7,
                dailyRentalRate : 4.5,
                liked : true
            },
            {
                id: 5,
                title : 'The Sixth Sense',
                genre : 'Thriller',
                numberInStock: 4,
                dailyRentalRate : 3.5,
                liked : true
            },
            {
                id: 6,
                title : 'The Averngers',
                genre : 'Action',
                numberInStock: 7,
                dailyRentalRate : 3.5,
                liked : true
            },
            {
                id: 7,
                title : 'The End Game',
                genre : 'Action',
                numberInStock: 7,
                dailyRentalRate : 3.5,
                liked : true
            }

            
        ],
        currentPage : 1,
        pageSize : 4
        
     };

     handleDelete = movie => {
         const movies = this.state.movies.filter(m => m.id !== movie.id);
         this.setState({movies});
     };
     handleLike = (movie) => {
         const movies = [...this.state.movies];
         const idx = movies.indexOf(movie);
         movies[idx] = {...movie};
         movies[idx].liked = !movies[idx].liked;
         this.setState({movies});
         
     };
     handlePageChange = (page) => {

        this.setState({currentPage : page});
     };
     

    render() { 
        const { pageSize, currentPage} = this.state
        const {length : count} = this.state.movies;
        console.log('count : ', this.state.movies.length);
        if(count === 0)
            return <p>There are no movies in the database</p>;

            

        return (

            <React.Fragment>
                <p>Showing {count} movies in the databse </p>
                <table className = "table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th />
                        <th/>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie =>(
                        <tr key= {movie.id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td> <Like liked = {movie.liked} 
                            onClick = { () => this.handleLike(movie) }

                            /> </td>
                            <td>
                            <button 
                            onClick = {() => this.handleDelete(movie)}
                            className= "btn btn-danger btn-sm"
                             >Delete</button>
                             </td>
                        </tr>
                    ))} 
                </tbody>

                </table>
                <Pagination 
                itmesCount = {count}
                 pageSize = {pageSize}
                 currentPage = {currentPage}
                 onPageChange = {this.handlePageChange}
                 />
  

            </React.Fragment>

          );
    }
}
 
export default Movies;