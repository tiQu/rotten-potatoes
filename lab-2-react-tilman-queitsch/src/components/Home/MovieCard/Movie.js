import React, { Component } from 'react'
import Productitem from './Product-item'
import movieData from './movieData'
import MovieCard from '../components/Home/MovieCard/MovieCard';

function createMovie(movie){
    return <MovieCard
            title = {movie.title}
            img = {movie.imgUrl}
            rating = {movie.rating}
            />;
}