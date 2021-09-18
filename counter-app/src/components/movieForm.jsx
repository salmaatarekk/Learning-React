import React from 'react';
import Form from './common/form'
import Joi from 'joi-browser'

class MovieForm extends Form {
    state = {
        data : {
            title : "",
            genre : "",
            numberInStock : "",
            dailyRentalRate : ""
        },
        genres: ['All Genres',  'Action', 'Thriller', 'Comedy'],
        errors: {}
    }
    schema = {
       // _id : Joi.string(),
        title : Joi.string().required().label("Title"),
        genre : Joi.string().required().label("Genre"),
        numberInStock : Joi.string().required().min(0).max(1000).label(
            "Number In Stock"
        ),
        dailyRentalRate : Joi.number().required().min(0).max(10).label("Daily Rental Rate")
    };
    componentDidMount() {
    //    const genres = this.state.genres
    //     this.setstate({genres});
    //     const movieId = this.props.match.params.id;
    //     if(movieId === "new")
    //     return;
        // const movie = getMovie(movieId);
        // if(!movie)
        // return this.props.history.replace("/not-found");
        // this.setState({data : this.mapToViewModel(movie) });
    }
    mapToViewModel(movie) {
        return {
            _id : movie._id,
            title : movie.title,
            genreId : movie.genre,
            numberInStock : movie.numberInStock,
            dailyRentalRate : movie.dailyRentalRate
        };

    }
    doSubmit = () => {
       // saveMovie(this.state.data);
        this.props.history.push("/movies");
    }


    render() { 
        return (
            <div>
            <h1>Movie Form</h1>
            <form onSubmit = {this.handleSubmit}>
            {this.renderInput('title', 'Title', true)}
            {this.renderSelect("genre", "Genre", this.state.genres)}
            {this.renderInput('numberInStock', 'Number in Stock', false)}
            {this.renderInput('dailyRentalRate', 'Rate', false)}
            {this.renderButton('Save')}

            </form>
            </div>

        );
    }
}
 
export default MovieForm;