import React from 'react';
import './MovieSection.scss';
import MovieRow from '../MovieRow/MovieRow'

class MovieSection extends React.Component{
    render(){
        return (
            <div>
                <MovieRow />
            </div>
        );
    }
}

export default MovieSection;