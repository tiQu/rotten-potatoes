import React from 'react';
import './MovieSection.scss';
import Movie from '../Movie/Movie'

class MovieSection extends React.Component{
    render(){
        return (
            <div className="main-movie">
                <div className="movie-row">
                    <h2>Popular</h2>
                    <Movie keyword='popular' sortBy='pop'/>
                </div>
                <div className="movie-row">
                    <h2>Now Playing</h2>
                    <Movie keyword='now_playing' sortBy='none'/>
                </div>
                <div className="movie-row">
                    <h2>Upcoming</h2>
                    <Movie keyword='upcoming' sortBy='none'/>
                </div>
            </div>
        );
    }
}

export default MovieSection;