import React from 'react';
import Form from './common/form'
import Joi from 'joi-browser'

class MovieForm extends Form {
    state = {
        data : {
            title : "",
            genreId : "",
            numberInStock : "",
            dailyRentalRate : ""
        },
        genres : [],
        errors: {}
    }
    schema = {
        _id : Joi.string(),
        title : Joi.string().required().label("Title"),
        genreId : Joi.string().required().label("Genre"),
        numberInStock : Joi.string().required().min(0).max(1000).label(
            "Number In Stock"
        ),
        dailyRentalRate : Joi.number().required().min(0).max(10).label("Daily Rental Rate")
    };
    componentDidMount() {
      //  const genres = getGenres();
        //this.setstate({genre});
        const movieId = this.props.match.params.id;
        if(movieId === "new")
        return;
        //const movie = getMovie(movieId);
        // if(!movie)
        // return this.props.history.replace("/not-found");
        // this.setState({data : this.mapToViewModel(movie) });
    }
    mapToViewModel(movie) {
        return {
            _id : movie._id,
            title : movie.title,
            genreId : movie.genre._id,
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
            {this.renderSelect("getId", "Genre", this.state.genres)}
            {this.renderInput('genre', 'Genre', false)}
            {this.renderInput('number in stock', 'Number in Stock', false)}
            {this.renderInput('rate', 'Rate', false)}

            </form>
            </div>

        );
    }
}
 
export default MovieForm;