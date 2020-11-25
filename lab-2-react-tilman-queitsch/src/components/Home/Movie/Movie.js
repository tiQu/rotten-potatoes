import React, { Component } from 'react'
import Movieitem from '../../../data/MovieItem/MovieItem';

function createMovie(movie){
    return <Movieitem
            title = {movie.title}
            vote_average = {movie.vote_average.toString()}
            poster_path = {movie.poster_path}
            release_date = {movie.release_date}
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
        fetch('https://api.themoviedb.org/3/movie/' + this.props.keyword + '?api_key=4d50e231ebab0b714167607ce53b71f1&language=en-US')
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
        
        movies.map(function(m){
            m.vote_average = parseFloat(m.vote_average) * 10;
        })
        if(this.props.sortBy=='pop') movies.sort((a, b) => (a.vote_average < b.vote_average) ? 1 : -1)

        if(!isLoaded){
            return <div>Loading...</div>
        }
        else {
            return (
                <div>
                    {movies.slice(0,12).map(createMovie)}
                </div>
            );
        }
    }
}