import React, { Component } from 'react';
import Pagination from './common/pagination';
import {paginate} from '../utils/paginate';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';
import _ from 'lodash';

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
        sortColumn : {path : 'title', order : 'asc'},
        genres: ['All Genres',  'Action', 'Thriller', 'Comedy'],
        currentPage : 1,
        pageSize : 4
        
     };
     componentDidMount()
     {

     }

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
     handleGenreSelect = (genre) => {
        this.setState({selectedGenre : genre, currentPage : 1})


     };
     handleSort = sortColumn => {
         
        this.setState ( {sortColumn} );         
     };
     getPageData = () => {

        const { pageSize, currentPage, selectedGenre , movies : allMovies, sortColumn} = this.state;


        const filtered = (selectedGenre && selectedGenre != 'All Genres') ? allMovies.filter(  m => m.genre == selectedGenre)
         : allMovies;   

        const sorted =  _.orderBy(filtered, [sortColumn.path], sortColumn.order); 

        const movies = paginate(sorted, currentPage, pageSize); 

        return { totalCount : filtered.length, data: movies };

     };

    render() { 
        const { pageSize, currentPage,  sortColumn} = this.state;
        const {length : count} = this.state.movies;
        console.log('count : ', this.state.movies.length);
        if(count === 0)
            return <p>There are no movies in the database</p>;
        
        const {totalCount, data : movies} = this.getPageData();

        return (

            <div className = "row">
                <div className="col-2">
                    <ListGroup items = {this.state.genres} 
                    selectedItem = {this.state.selectedGenre}
                    onItemSelect = {this.handleGenreSelect} />

                </div>
                <div className="col">

                <p>Showing {totalCount} movies in the databse </p>
                <MoviesTable
                 movies = {movies}
                sortColumn = {sortColumn}
                onLike = {this.handleLike}
                onDelete = {this.handleDelete}
                onSort = {this.handleSort}
                />
                <Pagination 
                itmesCount = {totalCount}
                 pageSize = {pageSize}
                 currentPage = {currentPage}
                 onPageChange = {this.handlePageChange}
                 />
        </div>

            </div>

          );
    }
}
 
export default Movies;