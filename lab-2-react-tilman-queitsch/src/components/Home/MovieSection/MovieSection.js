import React from 'react';
import './MovieSection.scss';
import movieData from '../../../data/movieData'
import MovieCard from '../MovieCard/MovieCard'

class MovieSection extends React.Component{
    render(){
        return (
            <div className="row my-4">
                <MovieCard
                title={movieData[0].title}
                img={movieData[0].imgUrl}
                rating={movieData[0].rating} />
            </div>
        );
    }
}

export default MovieSection;