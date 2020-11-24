import React from 'react';
import './MovieSection.scss';
import Movie from '../Movie/Movie'

class MovieSection extends React.Component{
    render(){
        return (
            <div className="main-movie">
                <div className="movie-row">
                    <Movie keyword='popular' sortBy='pop'/>
                </div>
                <div className="movie-row">
                    <Movie keyword='now_playing' sortBy='none'/>
                </div>
                <div className="movie-row">
                    <Movie keyword='upcoming' sortBy='none'/>
                </div>
            </div>
        );
    }
}

export default MovieSection;