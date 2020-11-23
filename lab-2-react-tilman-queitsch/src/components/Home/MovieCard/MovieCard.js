import React from 'react';
import './MovieCard.scss';

class MovieCard extends React.Component{
    render(){
        return (
            <div class="col-lg-3 col-md-6">
            <div class="card card-movie-grid">
                <a href="index.html" class="img-wrap"> 
                <img src={this.props.img} class="card-img-top image" alt="movie"/> 
                </a>
                <div class="card-body border-top text-center">
                <div class="card-text">
                    <a href="index.html" class="card-link title"><h5>{ this.props.title }</h5></a>
                    <div class="mt-1">{this.props.rating }</div>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

export default MovieCard;