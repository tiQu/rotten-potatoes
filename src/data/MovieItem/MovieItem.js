import React, { Component } from 'react'
import './MovieItem.scss';
import potato_brown from './potato_brown.ico';
import fries from './fries.png';

export default class Movieitem extends Component {
    render() {
        return (
                <div className='movie-item'>
                    <img className="poster" src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + this.props.poster_path}></img>
                    <div className="movie-summary">
                        <img className="movie-potato" src={((parseFloat(this.props.vote_average) >= 60) ? fries : potato_brown)}></img>
                        <div className="movie-title">{this.props.vote_average}%</div>
                    </div>
                    <div>{this.props.title}</div> 
                    <div className="releaseDate">Released: {this.props.release_date}</div> 
                </div>
        );
    }
}