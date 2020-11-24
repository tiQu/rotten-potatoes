import React, { Component } from 'react'
import movieData from '../../../data/movieData'
import Movieitem from '../../../data/MovieItem';
import './Movie.scss';

function createMovie(movie){
    return <Movieitem
            title = {movie.title}
            vote_average = {movie.vote_average}
            />;
}

export default class Movies extends Component {
    constructor(props){
        super(props);
        this.state= { 
            movies: [],
            isLoaded: false,
        }
    }

    componentDidMount(){
        //fetch('https://api.themoviedb.org/3/movie/550?api_key=4d50e231ebab0b714167607ce53b71f1')
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4d50e231ebab0b714167607ce53b71f1&language=en-US')
            .then(res=>res.json())
            .then(json=> {
                this.setState({
                    isLoaded: true,
                    movies: json["results"],
                })
            });
    }

   
    render() {
       
        const { isLoaded, movies } = this.state;

        if(!isLoaded){
            return <div>Loading...</div>
        }
        else {
            return (
                <div>
                    {movies.map(createMovie)}
                </div>
            );
        }
    }
}