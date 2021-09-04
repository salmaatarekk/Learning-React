import React, { Component } from 'react';
import like from './common/like';
class Movies extends Component {
    state = { 
        movies : [
            {
                id: 1,
                title : 'Terminator',
                genre : 'Action',
                numberInStock: 6,
                dailyRentalRate : 2.5
            },
            {
                id: 2,
                title : 'Die Hard',
                genre : 'Action',
                numberInStock: 5,
                dailyRentalRate : 2.5
            }

        ]

        
     };

     handleDelete = movie => {
         const movies = this.state.movies.filter(m => m.id !== movie.id);
         this.setState({movies});
     };
     

    render() { 
        const {length : count} = this.state.movies;
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
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie =>(
                        <tr key= {movie.id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td> <like /> </td>
                            <button 
                            onClick = {() => this.handleDelete(movie)}
                            className= "btn btn-danger btn-sm"
                             >Delete</button>
                        </tr>
                    ))} 
                </tbody>

                </table>

            </React.Fragment>

          );
    }
}
 
export default Movies;