import React from 'react';
import './MovieSection.scss';
import Movie from '../Movie/Movie'

class MovieSection extends React.Component{
    render(){
        return (
            <div>
                <Movie />
            </div>
        );
    }
}

export default MovieSection;